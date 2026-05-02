// One Dollar - Global App Logic
const API_URL = '/api';

const App = {
  // --- Auth State ---
  user: JSON.parse(localStorage.getItem('bb_user')) || null,
  token: localStorage.getItem('bb_token') || null,

  // --- Cart State ---
  cart: JSON.parse(localStorage.getItem('bb_cart')) || [],

  init() {
    this.updateCartCount();
    this.renderHeaderAuth();
    console.log('One Dollar App Initialized');
  },

  // --- API Helpers ---
  async request(endpoint, method = 'GET', data = null) {
    const headers = { 'Content-Type': 'application/json' };
    if (this.token) headers['Authorization'] = `Bearer ${this.token}`;

    const config = { method, headers };
    if (data) config.body = JSON.stringify(data);

    try {
      console.log(`[App] Requesting: ${API_URL}${endpoint}`);
      const response = await fetch(`${API_URL}${endpoint}`, config);
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Something went wrong');
      return result;
    } catch (err) {
      console.error('[App] API Error:', err);
      throw err;
    }
  },

  // --- Cart Management ---
  addToCart(product, quantity = 1) {
    const existing = this.cart.find(item => item._id === product._id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ ...product, quantity });
    }
    this.saveCart();
    this.updateCartCount();
    this.showToast(`${product.name} added to cart!`);
  },

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item._id !== productId);
    this.saveCart();
    this.updateCartCount();
    if (window.location.pathname.includes('checkout')) location.reload();
  },

  updateQuantity(productId, delta) {
    const item = this.cart.find(item => item._id === productId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) this.removeFromCart(productId);
      else {
        this.saveCart();
        this.updateCartCount();
        if (window.location.pathname.includes('checkout')) location.reload();
      }
    }
  },

  saveCart() {
    localStorage.setItem('bb_cart', JSON.stringify(this.cart));
  },

  getCartTotal() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  },

  updateCartCount() {
    const count = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = count;
  },

  // --- UI Helpers ---
  renderHeaderAuth() {
    const authContainer = document.getElementById('auth-nav');
    if (!authContainer) return;

    if (this.user) {
      authContainer.innerHTML = `
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium text-on-surface">Hi, ${this.user.name.split(' ')[0]}</span>
          <button onclick="App.logout()" class="text-sm text-primary hover:underline">Logout</button>
          ${this.user.role === 'admin' ? '<a href="/admin.html" class="text-xs bg-primary text-white px-2 py-1 rounded">Admin</a>' : ''}
        </div>
      `;
    } else {
      authContainer.innerHTML = `<a href="/auth.html" class="material-symbols-outlined">person</a>`;
    }
  },

  logout() {
    localStorage.removeItem('bb_user');
    localStorage.removeItem('bb_token');
    location.href = '/';
  },

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-primary text-white px-6 py-3 rounded-xl shadow-lg z-[100] transition-all transform translate-y-20';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.remove('translate-y-20'), 100);
    setTimeout(() => {
      toast.classList.add('translate-y-20');
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }
};

// Auto-init
document.addEventListener('DOMContentLoaded', () => App.init());
