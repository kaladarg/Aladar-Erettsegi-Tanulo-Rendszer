/**
 * Small robots.txt matcher (prefix rules, `*` wildcards and `$` anchors) for
 * the groups that apply to our user agent or to `*`. Longest match wins;
 * Allow wins ties, as in RFC 9309.
 */
export interface RobotsRules {
  allow: string[];
  disallow: string[];
  crawlDelaySeconds?: number;
}

export function parseRobots(text: string, userAgent: string): RobotsRules {
  const agent = userAgent.toLowerCase();
  const groups: { agents: string[]; rules: RobotsRules }[] = [];
  let current: { agents: string[]; rules: RobotsRules } | null = null;
  let lastWasAgent = false;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.replace(/#.*/, '').trim();
    const match = /^([A-Za-z-]+)\s*:\s*(.*)$/.exec(line);
    if (!match) continue;
    const key = match[1]!.toLowerCase();
    const value = match[2]!.trim();
    if (key === 'user-agent') {
      if (!current || !lastWasAgent) {
        current = { agents: [], rules: { allow: [], disallow: [] } };
        groups.push(current);
      }
      current.agents.push(value.toLowerCase());
      lastWasAgent = true;
      continue;
    }
    lastWasAgent = false;
    if (!current) continue;
    if (key === 'allow' && value) current.rules.allow.push(value);
    if (key === 'disallow' && value) current.rules.disallow.push(value);
    if (key === 'crawl-delay' && !Number.isNaN(Number(value))) {
      current.rules.crawlDelaySeconds = Number(value);
    }
  }

  const specific = groups.filter((g) => g.agents.some((a) => a !== '*' && agent.includes(a)));
  const chosen = specific.length > 0 ? specific : groups.filter((g) => g.agents.includes('*'));
  return chosen.reduce<RobotsRules>(
    (acc, g) => ({
      allow: [...acc.allow, ...g.rules.allow],
      disallow: [...acc.disallow, ...g.rules.disallow],
      crawlDelaySeconds: g.rules.crawlDelaySeconds ?? acc.crawlDelaySeconds,
    }),
    { allow: [], disallow: [] },
  );
}

function ruleToRegExp(rule: string): RegExp {
  const anchored = rule.endsWith('$');
  const body = (anchored ? rule.slice(0, -1) : rule)
    .split('*')
    .map((part) => part.replace(/[.+?^${}()|[\]\\]/g, '\\$&'))
    .join('.*');
  return new RegExp(`^${body}${anchored ? '$' : ''}`);
}

export function isAllowed(rules: RobotsRules, pathWithQuery: string): boolean {
  const longest = (list: string[]) =>
    Math.max(
      -1,
      ...list.filter((rule) => ruleToRegExp(rule).test(pathWithQuery)).map((r) => r.length),
    );
  const allow = longest(rules.allow);
  const disallow = longest(rules.disallow);
  return disallow === -1 || allow >= disallow;
}
