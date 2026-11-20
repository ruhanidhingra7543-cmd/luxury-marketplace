import express from 'express';
import crypto from 'crypto';
import { readDb, writeDb } from '../data/db.js';

const router = express.Router();

function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// POST register
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password, company, accountType } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required'
      });
    }

    const db = await readDb();
    if (!Array.isArray(db.users)) {
      db.users = [];
    }

    const existingUser = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'A user with this email address already exists'
      });
    }

    const userId = `usr-${Math.floor(1000 + Math.random() * 9000)}`;
    const token = generateToken();

    const newUser = {
      id: userId,
      name,
      email: email.toLowerCase(),
      passwordHash: hashPassword(password),
      company: company || 'Independent Design Studio',
      role: 'Interior Architect & Specifier',
      accountType: accountType || 'Business Account',
      wholesaleTier: 'Tier 1 Platinum (Active)',
      discountRate: '25% Trade Discount applied across all catalog orders',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8EE6gAmh0UPcGnwQhQ7hzWQ3o1IDLXpjB8CNgDdCVCXWT-H92lzjduj3er9BfO0vT2g31UXn6796yzv6G8reiqTNixwbjhbk6eOM8gpOYKDvoGRpFWdQxkh8SbYwjKOcgSz-vRyENje0l5FIgbEZhX8No3pSKQzLVP4v_0JkDDiE0e9o5xey2BSCOsVLzw5qGvBa_ySvJA86oPiUQJRgeGcIUXAofmA2BSvclMi5u5edoIg9RdlJQpQ',
      token,
      createdAt: new Date().toISOString()
    };

    db.users.push(newUser);
    // Also update current active profile
    db.profile = {
      id: newUser.id,
      name: newUser.name,
      role: newUser.role,
      accountType: newUser.accountType,
      company: newUser.company,
      wholesaleTier: newUser.wholesaleTier,
      email: newUser.email,
      discountRate: newUser.discountRate,
      avatar: newUser.avatar,
      stats: {
        totalOrders: 0,
        activeShipments: 0,
        savedCollections: 0,
        customCommissions: 0
      }
    };

    await writeDb(db);

    const { passwordHash, ...userSafe } = newUser;

    res.status(201).json({
      success: true,
      message: 'Account registered successfully',
      token,
      user: userSafe
    });
  } catch (err) {
    next(err);
  }
});

// POST login
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    const db = await readDb();
    if (!Array.isArray(db.users)) {
      db.users = [];
    }

    const user = db.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const inputHash = hashPassword(password);
    if (user.passwordHash !== inputHash) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const token = generateToken();
    user.token = token;

    // Sync profile
    db.profile = {
      ...db.profile,
      id: user.id,
      name: user.name,
      email: user.email,
      company: user.company,
      accountType: user.accountType
    };

    await writeDb(db);

    const { passwordHash, ...userSafe } = user;

    res.json({
      success: true,
      message: 'Logged in successfully',
      token,
      user: userSafe
    });
  } catch (err) {
    next(err);
  }
});

// GET current authenticated user
router.get('/me', async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

    const db = await readDb();
    if (!token) {
      // Default fallback profile for guest/demo
      return res.json({
        success: true,
        authenticated: false,
        user: db.profile
      });
    }

    const user = db.users?.find(u => u.token === token);
    if (!user) {
      return res.status(401).json({
        success: false,
        authenticated: false,
        message: 'Session expired or invalid token'
      });
    }

    const { passwordHash, ...userSafe } = user;
    res.json({
      success: true,
      authenticated: true,
      user: userSafe
    });
  } catch (err) {
    next(err);
  }
});

// POST logout
router.post('/logout', async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

    if (token) {
      const db = await readDb();
      const user = db.users?.find(u => u.token === token);
      if (user) {
        user.token = null;
        await writeDb(db);
      }
    }

    res.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (err) {
    next(err);
  }
});

export default router;
