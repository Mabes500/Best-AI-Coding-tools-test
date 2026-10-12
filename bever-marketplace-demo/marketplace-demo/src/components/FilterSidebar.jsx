export default function FilterSidebar({ filters, onChange, categories, countries }) {
  const set = (key) => (e) =>
    onChange({ ...filters, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  return (
    <aside className="sidebar">
      <label>
        Search
        <input type="search" placeholder="Cocoa, shea butter, ankara..." value={filters.q} onChange={set('q')} />
      </label>
      <label>
        Category
        <select value={filters.category} onChange={set('category')}>
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name} ({c.count})</option>
          ))}
        </select>
      </label>
      <label>
        Supplier country
        <select value={filters.country} onChange={set('country')}>
          <option value="">All countries</option>
          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
      </label>
      <label className="checkbox">
        <input type="checkbox" checked={filters.verified} onChange={set('verified')} />
        Verified suppliers only
      </label>
    </aside>
  );
}
