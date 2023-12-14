import { createRouter, createWebHistory } from 'vue-router'
// import { app, pages } from '@/config'
// import HomePage from '@/pages/HomePage.vue'
import productList from '../components/ProductList.vue'
import filter from '../components/Filter.vue'
import cart from '../pages/Cart.vue'
// const AboutPage = () => import(/* webpackChunkName: "p-about" */ '@/pages/AboutPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "product-list",
      component: productList
    },
    {
      path: "/cart",
      name: "cart",
      component: cart
    }
  ]
})

export default router
