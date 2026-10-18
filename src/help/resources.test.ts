import { describe, expect, it } from 'vitest';
import { hu } from '@/i18n/hu';
import { RESOURCES, resourcesFor, siteSearchUrl } from './resources';

describe('learning sites', () => {
  it('uses https and has a name and description for every site', () => {
    const texts = hu.help.resources as Record<string, { name: string; description: string }>;
    for (const site of RESOURCES) {
      expect(site.url).toMatch(/^https:\/\//);
      expect(texts[site.id]?.name).toBeTruthy();
      expect(texts[site.id]?.description).toBeTruthy();
    }
  });

  it('lists the subject sites first, then the general ones', () => {
    const ids = resourcesFor('matematika').map((site) => site.id);
    expect(ids.slice(0, 2)).toEqual(['khan', 'geogebra']);
    expect(ids).toContain('wikipedia');
    expect(ids).not.toContain('helyesiras');
  });

  it('builds a site-restricted search', () => {
    expect(siteSearchUrl('zanza.tv', 'Mohács')).toBe(
      'https://duckduckgo.com/?q=site%3Azanza.tv%20Moh%C3%A1cs&kl=hu-hu',
    );
  });
});
