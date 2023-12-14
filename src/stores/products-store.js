import iphone from "@/assets/images/iphone.webp";
import hp from "@/assets/images/hp.jpeg";
import jiobook from "@/assets/images/jiobook.jpeg";
import laptop from "@/assets/images/laptop.jpeg";
import macbook from "@/assets/images/macbook.jpeg";
import neckband from "@/assets/images/neckband.png";
import earpods from "@/assets/images/earpods.jpeg";
import wiredheadphone from "@/assets/images/wiredheadphone.png";

import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    cartList: [],
    categories: ["Laptop", "Phone", "Accessories"],
    filteredProductsList: [],
    // selectedCategories: [],
    productList: [
      {
        productName: "Samsung A50",
        image: iphone,
        price: 100000,
        quantity: 1,
        category: "Phone",
      },
      {
        productName: "laptop",
        image: laptop,
        price: 80000,
        quantity: 1,
        category: "Laptop",
      },
      {
        productName: "macbook",
        image: macbook,
        price: 140000,
        quantity: 1,
        category: "Laptop",
      },
      {
        productName: "iphone 12",
        image: iphone,
        price: 100000,
        quantity: 1,
        category: "Phone",
      },
      {
        productName: "Samsung S12",
        image: iphone,
        price: 100000,
        quantity: 1,
        category: "Phone",
      },
      {
        productName: "iphone 8",
        image: iphone,
        price: 100000,
        quantity: 1,
        category: "Phone",
      },
      {
        productName: "hp",
        image: hp,
        price: 50000,
        quantity: 1,
        category: "Laptop",
      },
      {
        productName: "jiobook",
        image: jiobook,
        price: 10000,
        quantity: 1,
        category: "Laptop",
      },
      {
        productName: "iphone 11",
        image: iphone,
        price: 100000,
        quantity: 1,
        category: "Phone",
      },
      {
        productName: "Samsung M21",
        image: iphone,
        price: 100000,
        quantity: 1,
        category: "Phone",
      },
      {
        productName: "neckband",
        image: neckband,
        price: 2000,
        quantity: 1,
        category: "Accessories",
      },
      {
        productName: "earpods",
        image: earpods,
        price: 2400,
        quantity: 1,
        category: "Accessories",
      },
      {
        productName: "wiredheadphone",
        image: wiredheadphone,
        price: 500,
        quantity: 1,
        category: "Accessories",
      },
    ],
    categoryList: [
      {
        categoryName: "Laptop",
        image: hp,
        products: [
          {
            productName: "iPhone",
            image: iphone,
            // image: '@/assets/images/earpods.jpeg',
            price: 100000,
            quantity: 1,
          },
          {
            productName: "HP",
            image: hp,
            price: 50000,
            quantity: 1,
          },
          {
            productName: "Jiobook",
            image: jiobook,
            price: 10000,
            quantity: 1,
          },
          {
            productName: "Laptop",
            image: laptop,
            price: 80000,
            quantity: 1,
          },
          {
            productName: "MacBook",
            image: macbook,
            price: 140000,
            quantity: 1,
          },
          {
            productName: "Neckband",
            image: neckband,
            price: 2000,
            quantity: 1,
          },
          {
            productName: "Earpods",
            image: earpods,
            price: 2400,
            quantity: 1,
          },
          {
            productName: "Wired Headphone",
            image: wiredheadphone,
            price: 500,
            quantity: 1,
          },
        ],
      },
      {
        categoryName: "Phones",
        image: iphone,
        products: [
          {
            productName: "iPhone",
            image: iphone,
            price: 100000,
            quantity: 1,
          },
          {
            productName: "HP",
            image: hp,
            price: 50000,
            quantity: 1,
          },
          {
            productName: "Jiobook",
            image: jiobook,
            price: 10000,
            quantity: 1,
          },
          {
            productName: "Laptop",
            image: laptop,
            price: 80000,
            quantity: 1,
          },
        ],
      },
      {
        categoryName: "Accessories",
        image: macbook,
        products: [
          {
            productName: "iPhone",
            image: iphone,
            price: 100000,
            quantity: 1,
          },
          {
            productName: "HP",
            image: hp,
            price: 50000,
            quantity: 1,
          },
          {
            productName: "Jiobook",
            image: jiobook,
            price: 10000,
            quantity: 1,
          },
          {
            productName: "Laptop",
            image: laptop,
            price: 80000,
            quantity: 1,
          },
          {
            productName: "MacBook",
            image: macbook,
            price: 140000,
            quantity: 1,
          },
          {
            productName: "Neckband",
            image: neckband,
            price: 2000,
            quantity: 1,
          },
          {
            productName: "Earpods",
            image: earpods,
            price: 2400,
            quantity: 1,
          },
          {
            productName: "Wired Headphone",
            image: wiredheadphone,
            price: 500,
            quantity: 1,
          },
        ],
      },
    ],
  }),
  actions: {
    async pushToCart(product) {
      this.cartList.push(product);

      console.log(this.cartList);
    },
    async clearCartList() {
      this.$state.cartList = [];
    },
    async storeUniqueCategories() {
      this.productList.forEach((product) => {
        if (!this.categories.includes(product.category)) {
          this.categories.push(product.category);
        }
      });
    },
    copyProducts() {
      this.filteredProductsList = JSON.parse(JSON.stringify(this.productList));
    },
    filterProductsByCategory(category) {
      this.filteredProductsList = this.productList.filter(
        (product) => product.category == category
      );
      console.log("this.filteredProductsList:", this.filteredProductsList);
      console.log("category: ", category);
    },
    filterProductsByCategoryList(category) {
      if (category.length == 0) this.filteredProductsList = this.productList;
      else {
        let arr = [];
        for (let i = 0; i < this.productList.length; i++) {
          for (let j = 0; j < category.length; j++) {
            if (this.productList[i].category == category[j])
              arr.push(this.productList[i]);
          }
        }
        this.filteredProductsList = arr;
      }

      console.log(
        "this.filteredProductsList store:",
        this.filteredProductsList
      );
      console.log("category store: ", category);
    },
  },
});
