<template>
  <div class="left-column">
    <!-- <div v-show="showSearchResult">
      <h3 :style="{ color: searchColor, fontSize: fontSize + 'px' }">
        Search result for: {{ searchQuery }}
      </h3>
      <hr />
    </div> -->
    <h3>Categories</h3>
    <!-- <div class="filter-group">
      <label v-for="category in categories" :key="category">
        <input
          type="radio"
          v-model="selectedCategory"
          :value="category"
          name="category"
        />
        {{ category }}
      </label>
    </div>

    <hr />
 -->
    <div class="filter-group">
      <label v-for="category in categories" :key="category">
        <input
          type="checkbox"
          v-model="selectedCategories"
          :value="category"
          name="category"
        />
        {{ category }}
      </label>
    </div>

    <hr />

    <h3>Price Range</h3>
    <div class="filter-group">
      <label v-for="(range, index) in priceRange" :key="index">
        <input type="checkbox" v-model="selectedCategories" :value="range" />
        {{ range }}
      </label>
    </div>

    <hr />

    <h3>Brand</h3>
    <div class="filter-group">
      <label v-for="(brand, index) in brands" :key="index">
        <input type="checkbox" v-model="selectedCategories" :value="brand" />
        {{ brand }}
      </label>
    </div>

    <hr />

    <h3>Gender</h3>
    <div class="filter-group">
      <label>
        <input type="radio" v-model="selectedGender" value="Male" />
        Male
      </label>

      <label>
        <input type="radio" v-model="selectedGender" value="Female" />
        Female
      </label>
    </div>
    <br />
    <div v-if="selectedGender !== ''">
      <h3>Selected Gender: {{ selectedGender }}</h3>
    </div>
    <div v-if="selectedCategories.length > 0">
      <h3>Filters applied</h3>
      {{ selectedCategories }}
    </div>
  </div>
</template>
<script src="./js/filter.js"></script>

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

.left-column {
  width: 30%;
  padding: 20px;
  background-color: #f2f2f2;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3,
h4 {
  color: #333;
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

label {
  display: flex;
  align-items: center;
}

input {
  margin-right: 5px;
}
</style>
