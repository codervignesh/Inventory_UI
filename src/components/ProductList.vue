<template>
  <!-- mixed category -->
  <div class="right-column">
    <div
      class="product-card"
      v-for="(product, index) in filteredProductsList"
      :key="index"
      ref="products"
    >
      <img :src="dummyImage" class="product-img" alt="Product Image" />
      <h4>{{ product.name }}</h4>
      <p>Price: {{ product.price }}</p>
      <div class="quantity">
        <button class="quantity-button" @click="decreaseQuantity(product)">
          -
        </button>
        {{ product.quantity }}
        <button class="quantity-button" @click="increaseQuantity(product)">
          +
        </button>
      </div>
      <div class="update-buttons">
        <button class="add-to-cart" @click="addToCart(product)">
          Add to cart
        </button>
        <!-- <button class="edit-button" @click="editProduct(product)"> -->
          <img class="edit-icon" :src="edit" @click="editProduct(product)" />
        <!-- </button> -->
      </div>
    </div>
  </div>

  <!-- products display old -->
  <!-- <div class="right-column">
    <div
      class="product-card"
      v-for="(product, index) in productList"
      :key="index"
    >
      <img :src="product.image" alt="Product Image" />
      <h4>{{ product.productName }}</h4>
      <p>Price: {{ product.price }}</p>
    </div>
  </div> -->

  <!-- display products based on category -->
  <!-- <div class="right-column">
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
        >
          @click="showProductDetails(product)"
        
          <div>
            <img :src="product.image" alt="Product Image" />
          <h4>{{ product.productName }}</h4>
          <p>Price: {{ product.price }}</p>
        <div>
          <button class="quantity-button" @click="decreaseQuantity(product)">-</button>
            {{ product.quantity }}
          <button class="quantity-button" @click="increaseQuantity(product)">+</button>
        </div>
        <button @click="addToCart(product)">Add to cart</button>
        </div>
    </div>
      </div>
    </div>
  </div> -->
</template>

<script src="./js/product-list.js"></script>

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

h3,
h4 {
  color: #333;
  margin-top: auto;
}

label {
  display: flex;
  align-items: center;
}

input {
  margin-right: 5px;
}

.right-column {
  width: 70%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product-card {
  width: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-img {
  width: 185px;
  height: 178px;
}

.edit-icon {
  width: 20px;
  height: 20px;
}

h2 {
  color: #333;
  margin-left: 10px;
}

/* category seperate display

.right-column {
  width: 70%;
  display: flex;
  flex-direction: column;
}

.category {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.product-list {
  width: 100%;
  display: flex;
  overflow-x: scroll;
}
.product-card {
  display: inline-block;
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
} */

.add-to-cart {
  background-color: #f7ad4d;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  width: 100px;
  margin: 5px;
}

.quantity-button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 0px 15px;
}

.edit-button {
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 15px;
  border-radius: 50px;
}

.update-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 15px;
}
</style>
