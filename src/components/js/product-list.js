import edit from "@/assets/images/edit.png";

import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
  data() {
    return {
      edit
    };
  },
  methods: {
    decreaseQuantity(product) {
      if (product.quantity > 0) product.quantity -= 1;
    },
    increaseQuantity(product) {
      product.quantity += 1;
    },
    addToCart(product) {
      this.pushToCart(product);
      this.$router.push("/cart");
    },
    editProduct(product){
      this.$router.push("/update-product/"+product.id);
    },
    ...mapActions(useProductsStore, ["pushToCart", "GET_ALL_PRODUCTS"]),
  },
  computed: {
    ...mapState(useProductsStore, [
      "categoryList",
      "productList",
      "filteredProductsList",
      "list",
      "dummyImage"
    ]),
  },
  created() {
    console.log("from ref: ", this.$refs.products);

    this.GET_ALL_PRODUCTS()
  },

  //   created(){
  //     useProductsStore.copyProducts()
  //   }
};
