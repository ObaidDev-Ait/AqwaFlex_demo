import { describe, expect, it } from 'vitest';
import { categories } from './categories';
import { products } from './products';

describe('categories data', () => {
  it('is a non-empty list', () => {
    expect(categories.length).toBeGreaterThan(0);
  });

  it('has unique ids and slugs', () => {
    const ids = categories.map((c) => c.id);
    const slugs = categories.map((c) => c.slug);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('uses url-safe slugs and non-empty copy', () => {
    for (const category of categories) {
      expect(category.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(category.name.trim()).not.toBe('');
      expect(category.description.trim()).not.toBe('');
    }
  });

  it('uses image paths under the public categories folder', () => {
    for (const category of categories) {
      expect(category.image).toMatch(/^\/images\/categories\/[\w-]+\.(jpg|jpeg|png|webp|avif)$/);
    }
  });

  it('has at least one product in every category', () => {
    const usedSlugs = new Set(products.map((p) => p.categorySlug));
    for (const category of categories) {
      expect(usedSlugs, category.slug).toContain(category.slug);
    }
  });
});
