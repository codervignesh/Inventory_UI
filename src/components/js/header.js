import logo from "@/assets/images/images.png";
import cartImg from "@/assets/images/cart.webp";
import addproduct from "@/assets/images/addproduct.png";
import productImg from "@/assets/images/products.png";
import { mapActions, mapState, mapWritableState } from "pinia";
import { useProductsStore } from "../../stores/products-store";

export default {
  props: ["title"],
  emits: ["alert-search"],
  data() {
    return {
      searchColor: "red",
      fontSize: 18,
      logo: logo,
      cartImg: cartImg,
      productImg: productImg,
      addproduct: addproduct,
      showSearchResult: false,
      searchQuery: "",
    };
  },
  methods: {
    handleSearch(event) {
      this.searchQuery = event.target.value;
      this.showSearchResult = this.searchQuery !== "";
      alert("You searched: " + event.target.value);
    },
    cart() {
      this.$router.push("/cart");
    },
    product() {
      this.$router.push("/");
    },
    addProduct() {
      this.$router.push("/add-product");
    },
  },
  computed: {
    ...mapState(useProductsStore, ["cartList"]),
  },
};
