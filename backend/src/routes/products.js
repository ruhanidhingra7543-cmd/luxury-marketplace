import express from 'express';
import { readDb } from '../data/db.js';

const router = express.Router();

// GET all categories
router.get('/categories', async (req, res, next) => {
  try {
    const db = await readDb();
    res.json({ success: true, count: db.categories.length, data: db.categories });
  } catch (err) {
    next(err);
  }
});

// GET trending products
router.get('/trending', async (req, res, next) => {
  try {
    const db = await readDb();
    const trending = db.products.filter(p => p.isTrending);
    res.json({ success: true, count: trending.length, data: trending });
  } catch (err) {
    next(err);
  }
});

// GET featured products
router.get('/featured', async (req, res, next) => {
  try {
    const db = await readDb();
    const featured = db.products.filter(p => p.isFeatured);
    res.json({ success: true, count: featured.length, data: featured });
  } catch (err) {
    next(err);
  }
});

// GET all products with filtering and search
router.get('/', async (req, res, next) => {
  try {
    const db = await readDb();
    const { category, search, material, origin, maxPrice } = req.query;
    let filtered = [...db.products];

    if (category && category.toLowerCase() !== 'all') {
      filtered = filtered.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const query = search.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.origin.toLowerCase().includes(query) ||
        p.material.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    if (material) {
      filtered = filtered.filter(p => 
        p.material.toLowerCase().includes(material.toLowerCase())
      );
    }

    if (origin) {
      filtered = filtered.filter(p => 
        p.origin.toLowerCase().includes(origin.toLowerCase())
      );
    }

    if (maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(maxPrice));
    }

    res.json({
      success: true,
      total: db.products.length,
      count: filtered.length,
      data: filtered
    });
  } catch (err) {
    next(err);
  }
});

// GET single product by ID
router.get('/:id', async (req, res, next) => {
  try {
    const db = await readDb();
    const id = parseInt(req.params.id, 10);
    const product = db.products.find(p => p.id === id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product with id ${req.params.id} not found`
      });
    }

    res.json({ success: true, data: product });
  } catch (err) {
    next(err);
  }
});

export default router;
