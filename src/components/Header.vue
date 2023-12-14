<template>
  <div class="header">
    <div class="header-left">
      <a href="">
        <img class="logo" :src="logo" alt="logo" />
      </a>
      <input type="text" placeholder="Search" @keyup.enter="handleSearch" />
      <!-- <h3>{{ title }}</h3> -->
    </div>
    <div class="header-nav">
      <nav>
        <button class="nav-button" @click="product">
            <img class="icon" :src="productImg" alt="cart" />
            Products</button>
        <!-- <a href="/"  style="padding: 0px 50px;" @click="$emit('alert-search', title)">Product List</a> -->
        <!-- <a href=""  style="padding: 0px 50px;" @click="$emit(title)">Add Product</a> -->
        <button class="nav-button">
            <img class="icon" :src="addproduct" alt="cart" />
            Add Product</button>
        
        <!-- <a href="/cart"  style="padding: 0px 50px;">Cart {{ cartList.length }}</a> -->
        <button class="nav-button" @click="cart">
            <img class="icon" :src="cartImg" alt="cart" />
            Cart
          <sub>{{ cartList.length }}</sub>
        </button>
      </nav>
    </div>
  </div>
</template>

<script src="./js/header.js"></script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  margin-top: 15px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.header-left {
  display: flex;
  width: 50%;
}

input[type="text"] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 60%;
}

.logo {
  height: 40px;
  padding: 0px 50px;
}

.icon {
  height: 30px;
}

a {
  text-decoration: none;
  font-size: 16px;
  transition: font-size 1s;
}

a:hover {
  color: red;
  font-size: 18px;
}

.nav-button {
  background-color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  margin: 0px 40px;
  border-radius: 50px;
  /* width: px; */
  justify-content: space-evenly;
  font-size: 18px;
}
</style>
