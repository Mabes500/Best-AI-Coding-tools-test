import { useEffect, useState } from 'react';
import { api } from '../lib/api.js';
import FilterSidebar from './FilterSidebar.jsx';
import ProductCard from './ProductCard.jsx';

const EMPTY = { q: '', category: '', country: '', verified: false };

export default function ProductList() {
  const [filters, setFilters] = useState(EMPTY);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.categories().then(setCategories).catch(() => {});
    api.countries().then(setCountries).catch(() => {});
  }, []);

  useEffect(() => {
    api.products(filters).then(setProducts).catch((e) => setError(e.message));
  }, [filters]);

  return (
    <div className="layout">
      <FilterSidebar filters={filters} onChange={setFilters} categories={categories} countries={countries} />
      <section>
        <div className="list-header">
          <h1>Products</h1>
          <span className="muted">{products.length} results</span>
        </div>
        {error && <p className="error">{error}</p>}
        {products.length === 0 && !error ? (
          <p className="muted">No products match these filters. <button className="link" onClick={() => setFilters(EMPTY)}>Clear filters</button></p>
        ) : (
          <div className="grid">
            {products.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
