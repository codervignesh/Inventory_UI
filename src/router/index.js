import { createRouter, createWebHistory } from "vue-router";
// import { app, pages } from '@/config'
// import HomePage from '@/pages/HomePage.vue'
import productList from "../components/ProductList.vue";
import filter from "../components/Filter.vue";
import cart from "../pages/Cart.vue";
import addProduct from "../pages/AddProduct.vue";
import updateProduct from "../pages/UpdateProduct.vue";
// const AboutPage = () => import(/* webpackChunkName: "p-about" */ '@/pages/AboutPage.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "product-list",
      component: productList,
    },
    {
      path: "/cart",
      name: "cart",
      component: cart,
    },
    {
      path: "/add-product",
      name: "add-product",
      component: addProduct,
    },
    {
      path: "/update-product/:id",
      name: "update-product",
      component: updateProduct,
    },
  ],
});

export default router;
