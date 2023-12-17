<template>
  <div>
    <div>
      <header-section
        :title="'headings'"
        @alert-search="alertSearchMessage"
      ></header-section>
    </div>
    <div class="container">
      <transition name="fade" mode="out-in">
        <filter-pannel v-if="isProductPage" key="filterPanel"></filter-pannel>
      </transition>
        <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    </div>
  </div>
</template>

<script src="./js/app"></script>

<style lang="scss" scoped>
@import "@blibli/blue-design-tokens/dist/tokens-default.scss";

.container {
  margin-top: 10px;
  display: flex;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s; 
}
.fade-enter-from, .fade-leave-to {
  opacity: 0; 
}
</style>
