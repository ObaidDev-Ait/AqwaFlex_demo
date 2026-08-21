import { describe, expect, it } from 'vitest';
import { products } from './products';
import { categories } from './categories';

describe('products data', () => {
  it('is a non-empty catalogue', () => {
    expect(products.length).toBeGreaterThan(0);
  });

  it('has unique ids and slugs', () => {
    const ids = products.map((p) => p.id);
    const slugs = products.map((p) => p.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('uses url-safe slugs', () => {
    for (const product of products) {
      expect(product.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    }
  });

  it('references an existing category for every product', () => {
    const categorySlugs = new Set(categories.map((c) => c.slug));
    for (const product of products) {
      expect(categorySlugs, `${product.slug} -> ${product.categorySlug}`).toContain(
        product.categorySlug
      );
    }
  });

  it('populates the descriptive fields used by the product pages', () => {
    for (const product of products) {
      expect(product.name.trim()).not.toBe('');
      expect(product.shortDescription.trim()).not.toBe('');
      expect(product.fullDescription.length).toBeGreaterThan(product.shortDescription.length);
      expect(product.features.length).toBeGreaterThan(0);
      expect(Object.keys(product.specifications).length).toBeGreaterThan(0);
      expect(product.images.length).toBeGreaterThan(0);
    }
  });

  it('exposes positive prices for every price table row', () => {
    for (const product of products) {
      expect(product.priceTable.length).toBeGreaterThan(0);
      for (const row of product.priceTable) {
        expect(row.dimension.trim()).not.toBe('');
        expect(row.price).toBeGreaterThan(0);
      }
    }
  });

  it('sorts each price table from cheapest to most expensive', () => {
    for (const product of products) {
      const prices = product.priceTable.map((row) => row.price);
      expect(prices, product.slug).toEqual([...prices].sort((a, b) => a - b));
    }
  });

  it('prices every advertised dimension', () => {
    const size = (label: string) => label.match(/^[\d]+(?:x[\d]+)+/)?.[0];
    for (const product of products) {
      const pricedSizes = new Set(product.priceTable.map((row) => size(row.dimension)));
      for (const dimension of product.dimensions) {
        expect(pricedSizes, `${product.slug} is missing a price for ${dimension}`).toContain(
          size(dimension)
        );
      }
    }
  });

  it('advertises the cheapest price as the starting price', () => {
    for (const product of products) {
      if (!product.price || !/\d/.test(product.price)) continue;
      const cheapest = Math.min(...product.priceTable.map((row) => row.price));
      const advertised = Number(product.price.replace(/[^\d]/g, ''));
      expect(advertised, product.slug).toBe(cheapest);
    }
  });

  it('uses image paths under the public products folder', () => {
    for (const product of products) {
      for (const image of product.images) {
        expect(image).toMatch(/^\/images\/products\/[\w-]+\.(jpg|jpeg|png|webp|avif)$/);
      }
    }
  });

  it('features a subset of the catalogue on the homepage', () => {
    const featured = products.filter((p) => p.isFeatured);
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.length).toBeLessThan(products.length);
  });
});
