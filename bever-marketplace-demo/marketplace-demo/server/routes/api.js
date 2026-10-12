import { Router } from 'express';
import { searchProducts, getProduct, listCategories, listCountries } from '../lib/catalog.js';
import { createOrder, getOrder } from '../lib/orders.js';

const router = Router();

router.get('/products', (req, res) => {
  const { q, category, country, verified } = req.query;
  res.json(searchProducts({ q, category, country, verifiedOnly: verified === 'true' }));
});

router.get('/products/:id', (req, res) => {
  const product = getProduct(req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

router.get('/categories', (_req, res) => res.json(listCategories()));
router.get('/countries', (_req, res) => res.json(listCountries()));

// Mock checkout: validates and stores the order in memory. No payment, no supplier notification.
router.post('/orders', (req, res) => {
  const { order, error } = createOrder(req.body ?? {});
  if (error) return res.status(400).json({ error });
  res.status(201).json(order);
});

router.get('/orders/:reference', (req, res) => {
  const order = getOrder(req.params.reference);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

export default router;
