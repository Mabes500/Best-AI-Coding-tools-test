# Bever Marketplace Demo

A small B2B marketplace demo connecting buyers with African suppliers. All suppliers, prices, certifications and stock are fictional demonstration data.

## Stack

- Frontend: React 18 + Vite, React Router
- Backend: Express API with in-memory data (no database)
- Tests: Vitest

## Getting started

```bash
npm install
npm run dev      # API on :3001, web on :5173
npm test         # run unit tests
```

Production-style run: `npm run build && npm start`, then open http://localhost:3001.

## Features

- Product catalog with search, category, supplier country and verified-supplier filters
- Product detail pages with minimum order quantity (MOQ) and lead time
- Cart persisted in the browser
- Mock checkout with trade terms (FOB, CIF, EXW) and an order confirmation page

## Project structure

```
server/
  data/products.js     seed data: suppliers, categories, products
  lib/catalog.js       search and lookup
  lib/orders.js        order validation and in-memory order store
  routes/api.js        REST endpoints under /api
  index.js             Express entry point
src/
  lib/cart.js          pure cart functions
  lib/api.js           fetch helpers
  CartContext.jsx      React state wrapper for the cart
  components/          pages and UI pieces
tests/                 Vitest unit tests
```

## API

| Method | Path | Description |
| --- | --- | --- |
| GET | /api/products?q=&category=&country=&verified= | Search and filter products |
| GET | /api/products/:id | Product with supplier details |
| GET | /api/categories | Categories with product counts |
| GET | /api/countries | Supplier countries |
| POST | /api/orders | Place a mock order |
| GET | /api/orders/:reference | Fetch a placed order |
