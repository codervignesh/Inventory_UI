import iphone from "@/assets/images/iphone.webp";
import hp from "@/assets/images/hp.jpeg";
import jiobook from "@/assets/images/jiobook.jpeg";
import laptop from "@/assets/images/laptop.jpeg";
import macbook from "@/assets/images/macbook.jpeg";
import neckband from "@/assets/images/neckband.png";
import earpods from "@/assets/images/earpods.jpeg";
import wiredheadphone from "@/assets/images/wiredheadphone.png";
import services from "../services/services.js";

import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    cartList: [],
    productData: {},
    categories: ["Laptop", "Phone", "Book"],
    categoriesIdList: [{
      id: 1,
      name: "Book",
    },
    {
      id: 4,
      name: "Laptop",
    },
    {
      id: 8,
      name: "Phone",
    }],
    filteredProductsList: [],
    // list: [],
    productList: [],
    dummyImage: laptop,
    productList1: [
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
    async popFromCart(product) {
      this.cartList.pop(product);

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
            if (this.productList[i].category.name == category[j])
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
    async CREATE_ORDER(orderDetails){
      const payload = orderDetails.payload
      const createOrderResponse = await services.createOrder(payload)
      const data = await createOrderResponse().json();
      console.log("added to cart: ", data);
    },
    async CREATE_PRODUCT(productDetails){
      const payload = productDetails.payload
      const createProductResponse = await services.createProduct(payload)
      const data = await createProductResponse().json();
      console.log("added to inventory: ", data);
    },
    async updateProductDetails(payload,id){
      try {
        const response = await services.updateProductDetails(payload.payload,id);
        if (response.status === 404) {
          throw new Error("Page not found");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }

    },
    async GET_ALL_PRODUCTS(){
      fetch("http://localhost:8081/inventory/products/")
      .then((response) => {
        const result = response.json()
        if(response.status === 200){
          result.then((data) => {
            console.log(data)
            this.productList = data
            this.filteredProductsList = data
            console.log("list", this.productList)
          })
        }
      })
    },
    async GET_PRODUCT(id){
      fetch("http://localhost:8081/inventory/products/?productId="+id)
      .then((response) => {
        const result = response.json()
        if(response.status === 200){
          result.then((data) => {
            console.log(data)
            console.log(data)
            this.productData.id = data[0].id
            this.productData.name = data[0].name
            this.productData.price = data[0].price
            this.productData.quantity = data[0].quantity
            this.productData.category = data[0].category
            
            console.log("list", this.productData)
          })
        }
      })
    }


    // GET_ALL_PRODUCTS(request) {
    //   console.log("Before Service call");
    //   const result = services.getAllProducts();
    //   console.log(result);

    //   result.then((data) => {
    //         data.then((jsonData) => {
    //           console.log("jsondata: ", jsonData);
    //           if (jsonData.status === 200) {
    //             this.productList = jsonData;
    //           }
    //           console.log("List: ", this.productList)
    //         });
    //       }, () => {}
    //     )
    //     .catch((e) => {});

    //   console.log("After Service call");
    // },
  },
});
