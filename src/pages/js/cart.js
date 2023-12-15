import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
  methods: {
    clearCart() {
      this.clearCartList();
      this.$router.push("/");
    },
    decreaseQuantity(product) {
      if (product.quantity > 0) product.quantity -= 1;
    },
    increaseQuantity(product) {
      product.quantity += 1;
    },
    removeFromCart(product) {
      this.popFromCart(product);
      this.$router.push("/");
    },
    placeOrder() {
      console.log(this.cart);
      const cartRequest = {
        orderId: 1,
        customerId: 3,
        productId: this.cartList[0].id,
        quantity: this.cartList[0].quantity,
      };
      const actions = {
        payload: cartRequest,
      };
      this.CREATE_ORDER(actions);
      alert("order placed");
      this.clearCartList();
      this.$router.push("/");
    },
    ...mapActions(useProductsStore, [
      "popFromCart",
      "clearCartList",
      "CREATE_ORDER",
    ]),
  },
  computed: {
    ...mapState(useProductsStore, ["cartList", "dummyImage"]),
  },
};
