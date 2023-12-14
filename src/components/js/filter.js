import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
  mounted() {
    this.copyProducts();
  },
  data() {
    return {
      selectedCategories: [],
      selectedCategory: "",
      selectedGender: "",
      // categories: ["Category1", "Category2", "Category3"],
      priceRange: ["$0 - $25", "$25 - $50", "$50 - $75"],
      brands: ["Adidas", "Puma", "Nike", "Bata"],
    };
  },
  watch: {
    selectedCategory: {
      handler(category) {
        this.filterProductsByCategory(category);
        console.log("watch category: ", category);
      },
      immediate: true,
    },
    selectedCategories: {
      handler(categories) {
        this.filterProductsByCategoryList(categories);
        console.log("watch selectedCategories: ", categories);
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(useProductsStore, [
      "pushToCart",
      "filterProducts",
      "filterProductsByCategory",
      "filterProductsByCategoryList",
      "copyProducts",
    ]),
    filterProducts() {
      this.filterProductsByCategory(this.selectedCategory);
    },
  },
  computed: {
    ...mapState(useProductsStore, ["categories"]),
  },
};
