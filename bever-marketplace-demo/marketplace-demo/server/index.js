import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import api from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3001;
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');

app.use(express.json());
app.use('/api', api);

// Serve the built frontend when running `npm run build && npm start`.
app.use(express.static(dist));
app.get(/^\/(?!api).*/, (_req, res) => res.sendFile(path.join(dist, 'index.html')));

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
