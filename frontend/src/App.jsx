import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartCheckoutPage from './pages/CartCheckoutPage';
import CustomOrderPage from './pages/CustomOrderPage';
import OrderTrackingPage from './pages/OrderTrackingPage';
import ProfileDashboardPage from './pages/ProfileDashboardPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/product/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartCheckoutPage />} />
      <Route path="/custom-order" element={<CustomOrderPage />} />
      <Route path="/order-tracking" element={<OrderTrackingPage />} />
      <Route path="/profile" element={<ProfileDashboardPage />} />
    </Routes>
  );
}
