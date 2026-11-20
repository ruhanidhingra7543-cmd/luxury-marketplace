import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import ordersRouter from './routes/orders.js';
import customOrdersRouter from './routes/customOrders.js';
import profileRouter from './routes/profile.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    service: 'Aureate Luxury Marketplace API',
    database: 'connected (json filesystem store)',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/custom-orders', customOrdersRouter);
app.use('/api/profile', profileRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint ${req.originalUrl} not found`
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled Server Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: err.message
  });
});

app.listen(PORT, () => {
  console.log(`✨ Aureate Backend server is running at http://localhost:${PORT}`);
  console.log(`🔗 Health check available at http://localhost:${PORT}/api/health`);
});
