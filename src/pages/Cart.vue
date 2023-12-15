<template>
  <div class="right-column">
    <div class="clear-cart">
      <button class="clear-button" @click="clearCart()">Clear Cart</button>
    </div>
    <div class="product-card" v-for="(product, index) in cartList" :key="index">
      <img :src="dummyImage" alt="Product Image" />
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
      <button class="add-to-cart" @click="removeFromCart(product)">
        Remove
      </button>
    </div>
    <div class="place-order"></div>
    <button class="place-order-button" :class="{showcheckout : cartList.length}"  @click="placeOrder(product)">
      Proceed to checkout
    </button>
  </div>

  <!-- <div>
    <button @click="clearCart()">Clear Cart</button>
    <div class="right-column">
      <div
        class="product-card"
        v-for="(product, index) in cartList"
        :key="index"
      >
        <img :src="product.image" alt="Product Image" />
        <h4>{{ product.productName }}</h4>
        <p>Price: {{ product.price }}</p>
      </div>
    </div>
  </div> -->
</template>

<script src="./js/cart.js"></script>

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

.showcheckout{
  visibility: hidden;
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

.right-column {
  width: 100%;
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

.product-card img {
  width: 185px;
  height: 178px;
}

h2 {
  color: #333;
  margin-left: 10px;
}

.clear-cart {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.place-order {
  display: flex;
  width: 100%;
  justify-content: flex-end;
}

.clear-button {
  margin: 0px 40px;
  padding: 8px;
  border-radius: 8px;
  height: 40px;
}

.place-order-button {
  margin: 0px 40px;
  padding: 8px;
  border-radius: 8px;
  height: 40px;
}

.add-to-cart {
  background-color: #e1e5eb;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 50px;
  width: 150px;
}

.quantity-button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 0px 15px;
}
</style>
