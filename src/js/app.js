import HeaderSection from "@/components/Header.vue";
import FilterPannel from "@/components/Filter.vue";
import ProductList from "@/components/ProductList.vue";
export default {
  components: {
    HeaderSection,
    FilterPannel,
    ProductList
  },
  methods: {
    alertSearchMessage(message){
      alert(message)
    },
  },
  computed: {
    isProductPage() {
      return this.$route.name == "product-list";
    },
  },
};