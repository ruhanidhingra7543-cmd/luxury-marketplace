import express from 'express';
import { readDb, writeDb } from '../data/db.js';

const router = express.Router();

// GET order by orderId
router.get('/:orderId', async (req, res, next) => {
  try {
    const db = await readDb();
    const { orderId } = req.params;
    const order = db.orders.find(o => o.orderId.toLowerCase() === orderId.toLowerCase());

    if (!order) {
      return res.status(404).json({
        success: false,
        message: `Order #${orderId} not found`
      });
    }

    res.json({ success: true, data: order });
  } catch (err) {
    next(err);
  }
});

// GET all orders
router.get('/', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json({ success: true, count: db.orders.length, data: db.orders });
  } catch (err) {
    next(err);
  }
});

// POST create new order (saved persistently)
router.post('/', async (req, res, next) => {
  try {
    const db = await readDb();
    const { items, shipping, paymentMethod, totals } = req.body;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const newOrderId = `AUR-${randomNum}-${randomChar}9`;

    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const timeFormatted = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    const newOrder = {
      orderId: newOrderId,
      createdAt: now.toISOString(),
      estimatedArrival: 'Estimated in 3-5 business days',
      status: 'Processing',
      courier: {
        name: 'James W.',
        company: 'Premium Logistics',
        photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGA3WRibpsBjDIGtVzxT-WK1zcz-BdqARZsNDHhHWyWr44iYM7VUHUcZcl1462USQvmZ4ciVkDWHVEECoCJp1MfKlBCq8MFVAW35VHENe8pMjDA690B-s68WslbfAGVVEEZi9ww_swdWKU2OrD9t9a4UG_o5wmN8CyG03KGjB-dzdzJ1rAcHBrFBl6T78gg_3tbJ7dtc3xW7eD6Vrwl9t9rj4aqoiAwYKBeYtJ-m7iLmqSkR2uRFj5KA'
      },
      items: items || [],
      shippingAddress: shipping || {},
      paymentMethod: paymentMethod || 'credit_card',
      pricing: totals || {
        subtotal: 11050,
        delivery: 250,
        tax: 884,
        total: 12184
      },
      timeline: [
        { step: 'Order Placed', timestamp: `${dateFormatted} - ${timeFormatted}`, completed: true, active: true },
        { step: 'Processing', timestamp: 'Pending verification', completed: false },
        { step: 'Shipped', timestamp: 'Pending dispatch', completed: false },
        { step: 'Out for Delivery', timestamp: 'Pending courier handover', completed: false }
      ]
    };

    db.orders.unshift(newOrder);
    await writeDb(db);

    res.status(201).json({
      success: true,
      message: 'Order created successfully and saved to database',
      data: newOrder
    });
  } catch (err) {
    next(err);
  }
});

export default router;
