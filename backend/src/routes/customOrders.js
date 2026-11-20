import express from 'express';
import { readDb, writeDb } from '../data/db.js';

const router = express.Router();

// POST submit bespoke design request (persists to DB)
router.post('/', async (req, res, next) => {
  try {
    const db = await readDb();
    const { width, length, materials, notes, referenceFile } = req.body;

    const requestId = `BESPOKE-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date();

    const newRequest = {
      id: requestId,
      submittedAt: now.toISOString(),
      status: 'Under Artisan Review',
      dimensions: {
        widthCm: width || 0,
        lengthCm: length || 0
      },
      materials: materials || [],
      notes: notes || '',
      referenceFile: referenceFile || null,
      estimatedQuotationHours: 24
    };

    if (!Array.isArray(db.customOrders)) {
      db.customOrders = [];
    }
    db.customOrders.unshift(newRequest);
    await writeDb(db);

    res.status(201).json({
      success: true,
      message: 'Bespoke design request submitted and logged successfully',
      data: newRequest
    });
  } catch (err) {
    next(err);
  }
});

// GET all bespoke requests
router.get('/', async (req, res, next) => {
  try {
    const db = await readDb();
    const customOrders = db.customOrders || [];
    res.json({
      success: true,
      count: customOrders.length,
      data: customOrders
    });
  } catch (err) {
    next(err);
  }
});

export default router;
