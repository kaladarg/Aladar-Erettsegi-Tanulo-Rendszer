// @vitest-environment node
import { describe, expect, it } from 'vitest';
import { isAllowed, parseRobots } from './robots';

const UA = 'ErettsegiGyakorloBot/0.1';

describe('robots.txt', () => {
  const text = `
User-agent: *
Disallow: /admin
Disallow: /*.php$
Allow: /admin/public
Crawl-delay: 5

User-agent: BadBot
Disallow: /
`;

  it('applies the * group to our agent', () => {
    const rules = parseRobots(text, UA);
    expect(rules.crawlDelaySeconds).toBe(5);
    expect(isAllowed(rules, '/kozneveles/erettsegi')).toBe(true);
    expect(isAllowed(rules, '/admin/secret')).toBe(false);
    expect(isAllowed(rules, '/admin/public/x')).toBe(true);
    expect(isAllowed(rules, '/index.php')).toBe(false);
    expect(isAllowed(rules, '/index.php?x=1')).toBe(true);
  });

  it('prefers a group naming our agent', () => {
    const rules = parseRobots(
      'User-agent: *\nDisallow: /\n\nUser-agent: erettsegigyakorlobot\nAllow: /\n',
      UA,
    );
    expect(isAllowed(rules, '/anything')).toBe(true);
  });

  it('allows everything when there are no rules', () => {
    expect(isAllowed(parseRobots('', UA), '/x')).toBe(true);
  });
});
