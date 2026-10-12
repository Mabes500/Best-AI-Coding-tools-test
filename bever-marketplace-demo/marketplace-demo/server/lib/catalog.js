import { products, suppliers, categories } from '../data/products.js';

const supplierById = new Map(suppliers.map((s) => [s.id, s]));

export function withSupplier(product) {
  return { ...product, supplier: supplierById.get(product.supplierId) ?? null };
}

/**
 * Filter the catalog. All filters are optional.
 * @param {{ q?: string, category?: string, country?: string, verifiedOnly?: boolean }} filters
 */
export function searchProducts({ q, category, country, verifiedOnly } = {}) {
  const term = q?.trim().toLowerCase();
  return products
    .map(withSupplier)
    .filter((p) => !term || p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term))
    .filter((p) => !category || p.category === category)
    .filter((p) => !country || p.supplier?.country === country)
    .filter((p) => !verifiedOnly || p.supplier?.verified);
}

export function getProduct(id) {
  const p = products.find((x) => x.id === id);
  return p ? withSupplier(p) : null;
}

export function listCategories() {
  return categories.map((c) => ({ ...c, count: products.filter((p) => p.category === c.id).length }));
}

export function listCountries() {
  return [...new Set(suppliers.map((s) => s.country))].sort();
}
