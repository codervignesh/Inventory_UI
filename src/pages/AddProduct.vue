<template>
  <div>
    <h1>Add Product</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" v-model="name" required />

      <label for="price">Price:</label>
      <input type="number" v-model="price" step="0.01" required />

      <label for="quantity">Quantity:</label>
      <input type="number" v-model="quantity" required />

      <label for="category">Category:</label>
      <select v-model="category" required>
        <option v-for="cat in categoriesIdList" :key="cat" :value="cat">
          {{ cat.name }}
        </option>
      </select>

      <button type="submit">Add product</button>
    </form>
  </div>
</template>

<script src="./js/add-product.js"></script>

<style scoped>
/* Add your custom styles here */

div {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
}

form {
  display: grid;
  gap: 16px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

input,
select {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
