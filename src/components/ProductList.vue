<template>
      <!-- <div class="right-column">
          <div class="product-card" v-for="(product, index) in productList" :key="index">
            <img :src="product.image" alt="Product Image">
            <h4>{{ product.productName }}</h4>
            <p>Price: {{ product.price }}</p>
          </div>
        </div> -->

        <div class="right-column">
        <div
          v-for="(category, catIndex) in categoryList"
          :key="catIndex"
          class="category"
        >
          <h2>Best of {{ category.categoryName }}</h2>
          <div class="product-list" :id="'productList_' + catIndex">
            <div
              class="product-card"
              v-for="(product, prodIndex) in category.products"
              :key="prodIndex"
              @click="showProductDetails(product)"
            ><div class="image">
              <img :src="product.image" alt="Product Image" />
            </div>
            <h4>{{ product.productName }}</h4>
              <p>Price: {{ product.price }}</p>
            </div>
          </div>
        </div>
      </div>    
</template>

<script src="./js/product-list.js">

</script>


<style scoped>
a {
  text-decoration: none;
  font-size: 16px;
  transition: font-size 1s;
}

a:hover {
  color: red;
  font-size: 18px;
}

.container {
  margin-top: 10px;
  display: flex;
}

h3,
h4 {
  color: #333;
}

label {
  display: flex;
  align-items: center;
}

input {
  margin-right: 5px;
}

/* // .right-column {
//     width: 70%;
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-around;
// }

// .product-card {
//     width: 200px;
//     background-color: #fff;
//     border: 1px solid #ddd;
//     padding: 10px;
//     margin: 10px;
//     text-align: center;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// } */

.image {
  width: 165px;
  height: 178px;
    
}

.product-card img {
  /* max-width: 100%; */
  /* height: auto; */
  width: 165px;
  height: 178px;
  object-fit: cover;
}

/* //latest */

.right-column {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.category {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  /* // overflow-x: scroll;
  // flex-wrap: nowrap; */
}

.product-list {
    width: 100%;  
  display: flex;
  overflow-x: scroll;
  /* flex-wrap: nowrap; */
}
.product-card {
  display: inline-block;
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}

h2 {
  color: #333;
  margin-left: 10px;
}
</style>