import { describe, expect, it } from 'vitest';
import robots from './robots';
import sitemap from './sitemap';

describe('robots', () => {
  it('allows crawling of the site for every user agent', () => {
    expect(robots().rules).toEqual({
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    });
  });

  it('points at a sitemap on the same host as the sitemap entries', () => {
    const sitemapUrl = robots().sitemap;
    expect(sitemapUrl).toBe('https://aquaflex.ma/sitemap.xml');
    const { origin } = new URL(sitemapUrl as string);
    for (const entry of sitemap()) {
      expect(new URL(entry.url).origin).toBe(origin);
    }
  });
});
