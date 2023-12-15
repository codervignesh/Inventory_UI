import iphone from "@/assets/images/iphone.webp";
import hp from "@/assets/images/hp.jpeg";
import jiobook from "@/assets/images/jiobook.jpeg";
import laptop from "@/assets/images/laptop.jpeg";
import macbook from "@/assets/images/macbook.jpeg";
import neckband from "@/assets/images/neckband.png";
import earpods from "@/assets/images/earpods.jpeg";
import wiredheadphone from "@/assets/images/wiredheadphone.png";

import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
  data() {
    return {

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
