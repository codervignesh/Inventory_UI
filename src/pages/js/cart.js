import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
    methods: {
        clearCart(){
            this.clearCartList();
        },
        ...mapActions(useProductsStore, [
            "pushToCart",
            "clearCartList"
        ])
    },
    computed: {
        ...mapState(useProductsStore, [
            "cartList"
        ])
      }
    }