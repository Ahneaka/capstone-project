import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    component: function () {
      return import('../views/AboutView.vue')
    }
  },
  {
    path: '/inventory',
    name: 'inventory',
    component: function () {
      return import('../views/InventoryView.vue')
    }
  },
  {
    path: '/products',
    name: 'products',
    component: function () {
      return import('../views/ProductsView.vue')
    }
  },
  {
    path: '/single',
    name: 'single',
    component: function () {
      return import('../views/SingleProduct.vue')
    }
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('../views/CartView.vue')
    }
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: function () {
      return import('../views/CheckoutView.vue')
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: function () {
      return import('../views/ProfileView.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: function () {
      return import('../views/ContactView.vue')
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: function () {
      return import('../views/LogoutView.vue')
    }
  },
  {
    path: '/registration',
    name: 'registration',
    component: function () {
      return import('../views/RegistrationView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
