import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
  data() {
    return {
      id: 0,
      name: "",
      price: 0,
      quantity: 0,
      category: {},
    };
  },
  // props: ['id'],
  methods: {
    submitForm() {
      const productRequest = {
        id: Number(this.productData.id),
        name: this.productData.name,
        price: Number(this.productData.price),
        quantity: Number(this.productData.quantity),
        category: this.productData.category,
      };

      const actions = {
        payload: productRequest,
      };
      this.updateProductDetails(actions, this.productData.id);
      console.log("this.productRequest: ", this.productRequest);
      this.$router.push("/");
    },
    ...mapActions(useProductsStore, ["GET_PRODUCT", "updateProductDetails"]),
  },
  computed: {
    ...mapState(useProductsStore, ["categoriesIdList", "productData"]),
  },
  created() {
    this.GET_PRODUCT(this.$route.params.id);
  },
};
