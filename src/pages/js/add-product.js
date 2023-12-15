import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
  data() {
    return {
      name: "",
      price: null,
      quantity: null,
      category: {},
    };
  },
  methods: {
    submitForm() {
      console.log("category: ", this.category);
      const productRequest = {
        id: 1,
        name: this.name,
        price: this.price,
        quantity: this.quantity,
        category: this.category,
      };
      console.log("this.cartRequest: ", this.productRequest);

      const actions = {
        payload: productRequest,
      };
      this.CREATE_PRODUCT(actions);
      alert("product created");
      console.log("this.productRequest: ", this.productRequest);
      this.$router.push("/");
    },
    ...mapActions(useProductsStore, ["CREATE_PRODUCT"]),
  },
  computed: {
    ...mapState(useProductsStore, ["categoriesIdList"]),
  },
};
