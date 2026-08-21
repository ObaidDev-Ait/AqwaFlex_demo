import { describe, expect, it } from 'vitest';
import sitemap from './sitemap';
import { products } from '@/data/products';

const BASE_URL = 'https://aquaflex.ma';

describe('sitemap', () => {
  it('lists the static routes plus one entry per product', () => {
    expect(sitemap()).toHaveLength(4 + products.length);
  });

  it('exposes every static route as an absolute url', () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const route of ['', '/about', '/contact', '/products']) {
      expect(urls).toContain(`${BASE_URL}${route}`);
    }
  });

  it('exposes every product detail page', () => {
    const urls = sitemap().map((entry) => entry.url);
    for (const product of products) {
      expect(urls).toContain(`${BASE_URL}/products/${product.slug}`);
    }
  });

  it('gives the homepage the highest priority and a weekly change frequency', () => {
    const home = sitemap().find((entry) => entry.url === BASE_URL);
    expect(home).toMatchObject({ priority: 1, changeFrequency: 'weekly' });
  });

  it('ranks static pages above product pages', () => {
    const entries = sitemap();
    const staticPage = entries.find((entry) => entry.url === `${BASE_URL}/about`);
    const productPage = entries.find((entry) =>
      entry.url.startsWith(`${BASE_URL}/products/`)
    );
    expect(staticPage).toMatchObject({ priority: 0.8, changeFrequency: 'weekly' });
    expect(productPage).toMatchObject({ priority: 0.6, changeFrequency: 'monthly' });
  });

  it('has no duplicate urls and stamps every entry', () => {
    const entries = sitemap();
    expect(new Set(entries.map((e) => e.url)).size).toBe(entries.length);
    for (const entry of entries) {
      expect(entry.lastModified).toBeInstanceOf(Date);
    }
  });
});
