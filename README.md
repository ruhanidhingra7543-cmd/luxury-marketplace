# Aureate — Luxury Textile Marketplace

Luxury Marketplace

About the Project

Luxury Marketplace is a full-stack e-commerce web application designed for browsing and purchasing luxury products. It provides users with a simple and user-friendly shopping experience.

Features

* User Registration and Login
* Browse Luxury Products
* Product Details
* Shopping Cart
* Checkout
* Custom Orders
* Order Tracking
* User Profile Dashboard

Technologies Used

Frontend

Backend: Node.js 

Project Structure

* frontend/ – Antigravity
* backend/ - Node.js

Installation and Setup

1. Clone the Repository

git clone https://github.com/ruhanidhingra7543-cmd/luxury-marketplace.git
cd luxury-marketplace

2. Setup Backend

cd backend
npm install

3. Start Backend

Use the start command defined in your backend package.json.

4. Setup Frontend

Open another terminal:

cd frontend
npm install

5. Start Frontend

Use the start command defined in your frontend package.json.

Project Purpose

This project was developed as an academic full-stack development assessment.

Author

Ruhani Dhingra

---

## 📂 Project Structure

```
stitch_loom_luxury_marketplace/
├── backend/                       # Node.js / Express REST API
│   ├── src/
│   │   ├── data/
│   │   │   └── mockData.js       # Seed data for rugs, categories, orders & profile
│   │   ├── routes/
│   │   │   ├── products.js       # Products & categories API endpoints
│   │   │   ├── orders.js         # Checkout & live order tracking API
│   │   │   ├── customOrders.js   # Bespoke design commissions API
│   │   │   └── profile.js        # User & wholesale business account API
│   │   └── server.js             # Express application & middleware setup
│   └── package.json
│
├── frontend/                      # React SPA (Vite + Tailwind CSS v4)
│   ├── src/
│   │   ├── components/
│   │   │   ├── TopAppBar.jsx     # Sticky header with cart indicator
│   │   │   └── BottomNavBar.jsx  # Mobile navigation bar
│   │   ├── pages/
│   │   │   ├── SplashPage.jsx    # Animated WebGL weaving shader splash screen
│   │   │   ├── HomePage.jsx      # Curated categories & trending textiles
│   │   │   ├── ProductListingPage.jsx # Filtering, search & product catalog
│   │   │   ├── ProductDetailPage.jsx  # Multi-angle gallery, swatches & specs
│   │   │   ├── CartCheckoutPage.jsx   # Multi-item cart & secure checkout
│   │   │   ├── CustomOrderPage.jsx    # Bespoke commission request form
│   │   │   ├── OrderTrackingPage.jsx  # Live delivery map & status timeline
│   │   │   └── ProfileDashboardPage.jsx # Wholesale designer profile & orders
│   │   ├── services/
│   │   │   └── api.js            # Frontend API client connected to backend
│   │   ├── App.jsx               # React Router routes
│   │   ├── main.jsx              # Application entry point
│   │   └── index.css             # Tailwind v4 theme tokens
│   ├── vite.config.js            # Vite config with backend proxy (`/api` -> `:5000`)
│   └── package.json
│
└── .gitignore
```

---

## 🚀 Quick Start Guide

### 1. Start the Backend Server

```bash
cd backend
npm install
npm run dev
```

> **Backend URL:** `http://localhost:5000`  
> **Health Check:** `http://localhost:5000/api/health`

---

### 2. Start the Frontend Application

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

> **Frontend URL:** `http://localhost:5173`

The frontend automatically proxies all `/api/*` requests to `http://localhost:5000` via Vite.

---

## 🔌 API Endpoints Reference

### Products
- `GET /api/products` — List all products with optional filters:
  - `?category=Rugs`
  - `?search=silk`
  - `?material=Wool`
  - `?origin=Moroccan`
  - `?maxPrice=3000`
- `GET /api/products/categories` — Curated product categories
- `GET /api/products/trending` — Featured trending textiles
- `GET /api/products/featured` — Featured collection pieces
- `GET /api/products/:id` — Detailed product specifications & gallery

### Orders & Tracking
- `POST /api/orders` — Place order, calculates totals, and generates tracking ID
- `GET /api/orders/:orderId` — Retrieve live order tracking timeline and courier details

### Bespoke Custom Orders
- `POST /api/custom-orders` — Submit custom rug dimensions, fiber selections, and notes
- `GET /api/custom-orders` — View submitted custom design requests

### Profile
- `GET /api/profile` — Wholesale interior designer account details
- `PUT /api/profile` — Update account profile details
