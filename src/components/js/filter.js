import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
    mounted(){
    this.copyProducts()
  },
  data() {
    return {
      selectedCategories: [],
      selectedCategory: "Laptop",
      selectedGender: "",
      // categories: ["Category1", "Category2", "Category3"],
      priceRange: ["$0 - $25", "$25 - $50", "$50 - $75"],
      brands: ["Adidas", "Puma", "Nike", "Bata"],
    };
  },
  methods: {
    ...mapActions(useProductsStore, [
      "pushToCart",
      "filterProducts",
      "filterProductsByCategory",
      "copyProducts"
    ]),
    filterProducts() {
      this.filterProductsByCategory(this.selectedCategory);
    },

  },
  computed: {
    ...mapState(useProductsStore, ["categories", "showAll"]),
  },

};
