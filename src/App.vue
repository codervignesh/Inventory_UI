<template>
  <div>
    <div>
      <header-section :title="'headings'" @alert-search="alertSearchMessage" ></header-section>
    </div>
    <div class="container">
      <filter-pannel></filter-pannel>
      <product-list></product-list>

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

</style>
