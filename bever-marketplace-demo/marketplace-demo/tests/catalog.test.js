import { describe, it, expect } from 'vitest';
import { searchProducts, getProduct } from '../server/lib/catalog.js';

describe('catalog search', () => {
  it('returns every product with no filters', () => {
    expect(searchProducts().length).toBe(14);
  });

  it('matches search terms in name or description', () => {
    const results = searchProducts({ q: 'shea' });
    expect(results.map((p) => p.id)).toContain('p-006');
  });

  it('filters by category and country together', () => {
    const results = searchProducts({ category: 'textiles', country: 'Nigeria' });
    expect(results.every((p) => p.category === 'textiles' && p.supplier.country === 'Nigeria')).toBe(true);
  });

  it('attaches supplier details to a single product', () => {
    expect(getProduct('p-001').supplier.name).toBe('Ashanti Cocoa Collective');
  });
});
