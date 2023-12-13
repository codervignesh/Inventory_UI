import iphone from "@/assets/images/iphone.webp";
import hp from "@/assets/images/hp.jpeg";
import jiobook from "@/assets/images/jiobook.jpeg";
import laptop from "@/assets/images/laptop.jpeg";
import macbook from "@/assets/images/macbook.jpeg";
import neckband from "@/assets/images/neckband.png";
import earpods from "@/assets/images/earpods.jpeg";
import wiredheadphone from "@/assets/images/wiredheadphone.png";

export default {
    data() {
        return {
          categoryList: [
            {
              categoryName: "Laptop",
              products: [
                {
                  productName: "iPhone",
                  image: iphone,
                  // image: '@/assets/images/earpods.jpeg',
                  price: 100000,
                },
                {
                  productName: "HP",
                  image: hp,
                  price: 50000,
                },
                {
                  productName: "Jiobook",
                  image: jiobook,
                  price: 10000,
                },
                {
                  productName: "Laptop",
                  image: laptop,
                  price: 80000,
                },
                {
                  productName: "MacBook",
                  image: macbook,
                  price: 140000,
                },
                {
                  productName: "Neckband",
                  image: neckband,
                  price: 2000,
                },
                {
                  productName: "Earpods",
                  image: earpods,
                  price: 2400,
                },
                {
                  productName: "Wired Headphone",
                  image: wiredheadphone,
                  price: 500,
                },
              ],
            },
            {
              categoryName: "Phones",
              products: [
                {
                  productName: "iPhone",
                  image: iphone,
                  price: 100000,
                },
                {
                  productName: "HP",
                  image: hp,
                  price: 50000,
                },
                {
                  productName: "Jiobook",
                  image: jiobook,
                  price: 10000,
                },
                {
                  productName: "Laptop",
                  image: laptop,
                  price: 80000,
                },
              ],
            },
            {
              categoryName: "Accessories",
              products: [
                {
                  productName: "iPhone",
                  image: iphone,
                  price: 100000,
                },
                {
                  productName: "HP",
                  image: hp,
                  price: 50000,
                },
                {
                  productName: "Jiobook",
                  image: jiobook,
                  price: 10000,
                },
                {
                  productName: "Laptop",
                  image: laptop,
                  price: 80000,
                },
                {
                  productName: "MacBook",
                  image: macbook,
                  price: 140000,
                },
                {
                  productName: "Neckband",
                  image: neckband,
                  price: 2000,
                },
                {
                  productName: "Earpods",
                  image: earpods,
                  price: 2400,
                },
                {
                  productName: "Wired Headphone",
                  image: wiredheadphone,
                  price: 500,
                },
              ],
            },
          ],
    
          productList: [
            {
              productName: "iphone",
              image: iphone,
              price: 100000,
            },
            {
              productName: "hp",
              image: hp,
              price: 50000,
            },
            {
              productName: "jiobook",
              image: jiobook,
              price: 10000,
            },
            {
              productName: "laptop",
              image: laptop,
              price: 80000,
            },
            {
              productName: "macbook",
              image: macbook,
              price: 140000,
            },
            {
              productName: "neckband",
              image: neckband,
              price: 2000,
            },
            {
              productName: "earpods",
              image: earpods,
              price: 2400,
            },
            {
              productName: "wiredheadphone",
              image: wiredheadphone,
              price: 500,
            },
            {
              productName: "iphone",
              image: iphone,
              price: 100000,
            },
            {
              productName: "hp",
              image: hp,
              price: 50000,
            },
            {
              productName: "jiobook",
              image: jiobook,
              price: 10000,
            },
            {
              productName: "laptop",
              image: laptop,
              price: 80000,
            },
            {
              productName: "macbook",
              image: macbook,
              price: 140000,
            },
            {
              productName: "neckband",
              image: neckband,
              price: 2000,
            },
            {
              productName: "earpods",
              image: earpods,
              price: 2400,
            },
            {
              productName: "wiredheadphone",
              image: wiredheadphone,
              price: 500,
            },
          ],
        };
      },
    methods: {
        showProductDetails(product) {
          alert(`Product Name: ${product.productName}\nPrice: ${product.price}`);
        },
      },
    } 
       