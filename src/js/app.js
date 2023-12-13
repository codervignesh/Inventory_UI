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
    }
    // showProductDetails(product) {
    //   alert(`Product Name: ${product.productName}\nPrice: ${product.price}`);
    // },
  },
  Computed: {
    // getClassName() {
    //   return true ? ‘Active’ : ‘inactive’;
    // }
  },
};
