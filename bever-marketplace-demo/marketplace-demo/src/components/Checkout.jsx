import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext.jsx';
import { api, formatUSD } from '../lib/api.js';

export default function Checkout() {
  const { cart, total, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ company: '', email: '', country: '', tradeTerms: 'FOB' });
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  if (cart.length === 0) return <p>Nothing to check out. <Link to="/">Browse products</Link></p>;

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const order = await api.createOrder({
        lines: cart.map((i) => ({ productId: i.productId, quantity: i.quantity })),
        buyer: { company: form.company, email: form.email, country: form.country },
        tradeTerms: form.tradeTerms,
      });
      navigate(`/orders/${order.reference}`);
      clear();
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  return (
    <section className="checkout">
      <h1>Checkout</h1>
      <p className="notice">Mock checkout: no payment is taken and no supplier is notified.</p>
      <form onSubmit={submit}>
        <label>Company name<input required value={form.company} onChange={set('company')} /></label>
        <label>Email<input required type="email" value={form.email} onChange={set('email')} /></label>
        <label>Destination country<input required value={form.country} onChange={set('country')} /></label>
        <label>
          Trade terms
          <select value={form.tradeTerms} onChange={set('tradeTerms')}>
            <option value="FOB">FOB (Free on Board)</option>
            <option value="CIF">CIF (Cost, Insurance and Freight)</option>
            <option value="EXW">EXW (Ex Works)</option>
          </select>
        </label>
        <p><strong>Order total: {formatUSD(total)}</strong></p>
        {error && <p className="error">{error}</p>}
        <button type="submit" disabled={submitting}>{submitting ? 'Placing order...' : 'Place demo order'}</button>
      </form>
    </section>
  );
}
