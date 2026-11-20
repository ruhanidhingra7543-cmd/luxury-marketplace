const API_BASE = '/api';

/**
 * Token management
 */
export function getAuthToken() {
  return localStorage.getItem('aureate_token');
}

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('aureate_token', token);
  } else {
    localStorage.removeItem('aureate_token');
  }
}

/**
 * Generic fetch wrapper with auth header injection
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const token = getAuthToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `Request failed with status ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.warn(`[API] Error calling ${endpoint}:`, err.message);
    throw err;
  }
}

// Authentication API
export async function login(email, password) {
  const res = await request('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  if (res.token) {
    setAuthToken(res.token);
  }
  return res;
}

export async function register({ name, email, password, company }) {
  const res = await request('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password, company }),
  });
  if (res.token) {
    setAuthToken(res.token);
  }
  return res;
}

export async function getCurrentUser() {
  return request('/auth/me');
}

export async function logout() {
  try {
    await request('/auth/logout', { method: 'POST' });
  } finally {
    setAuthToken(null);
  }
}

// Products API
export async function getProducts(params = {}) {
  const query = new URLSearchParams();
  if (params.category && params.category !== 'All') query.append('category', params.category);
  if (params.search) query.append('search', params.search);
  if (params.material) query.append('material', params.material);
  if (params.origin) query.append('origin', params.origin);
  if (params.maxPrice) query.append('maxPrice', params.maxPrice);

  const qs = query.toString();
  return request(`/products${qs ? `?${qs}` : ''}`);
}

export async function getProductById(id) {
  return request(`/products/${id}`);
}

export async function getCategories() {
  return request('/products/categories');
}

export async function getTrendingProducts() {
  return request('/products/trending');
}

export async function getFeaturedProducts() {
  return request('/products/featured');
}

// Orders API
export async function getOrder(orderId) {
  return request(`/orders/${orderId}`);
}

export async function createOrder(orderData) {
  return request('/orders', {
    method: 'POST',
    body: JSON.stringify(orderData),
  });
}

// Bespoke Custom Orders API
export async function createCustomOrder(customOrderData) {
  return request('/custom-orders', {
    method: 'POST',
    body: JSON.stringify(customOrderData),
  });
}

// User Profile API
export async function getUserProfile() {
  return request('/profile');
}

export async function updateUserProfile(profileData) {
  return request('/profile', {
    method: 'PUT',
    body: JSON.stringify(profileData),
  });
}
