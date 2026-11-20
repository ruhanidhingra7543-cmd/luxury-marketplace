import express from 'express';
import { readDb, writeDb } from '../data/db.js';

const router = express.Router();

// GET user profile
router.get('/', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json({
      success: true,
      data: db.profile
    });
  } catch (err) {
    next(err);
  }
});

// PUT update profile
router.put('/', async (req, res, next) => {
  try {
    const db = await readDb();
    db.profile = {
      ...db.profile,
      ...req.body
    };
    await writeDb(db);

    res.json({
      success: true,
      message: 'Profile updated successfully in database',
      data: db.profile
    });
  } catch (err) {
    next(err);
  }
});

export default router;
