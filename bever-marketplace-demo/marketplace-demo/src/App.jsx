import { Link, NavLink, Route, Routes } from 'react-router-dom';
import { useCart } from './CartContext.jsx';
import ProductList from './components/ProductList.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Cart from './components/Cart.jsx';
import Checkout from './components/Checkout.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';

export default function App() {
  const { count } = useCart();
  return (
    <>
      <div className="demo-banner">
        Demo marketplace. Suppliers, prices and stock are illustrative and unverified. No real orders or payments are processed.
      </div>
      <header className="site-header">
        <Link to="/" className="logo">Bever<span>.</span></Link>
        <nav>
          <NavLink to="/" end>Products</NavLink>
          <NavLink to="/cart">Cart ({count})</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders/:reference" element={<OrderConfirmation />} />
          <Route path="*" element={<p>Page not found. <Link to="/">Back to products</Link></p>} />
        </Routes>
      </main>
    </>
  );
}
