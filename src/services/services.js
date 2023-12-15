const baseUrl = "http://localhost:8081/inventory/products/";
const getAllProducts = () => {
  const url = baseUrl;
  return fetch(url);
};

const createOrder = (orderDetails) => {
  fetch("http://localhost:8080/customer/order/place-order/", {
    method: "POST",
    body: JSON.stringify(orderDetails),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
};

const createProduct = (productDetails) => {
  fetch("http://localhost:8080/customer/inventory/product/", {
    method: "POST",
    body: JSON.stringify(productDetails),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
};

const updateProductDetails = (productDetails, id) => {
  const url =
    "http://localhost:8080/customer/inventory/product/?productId=" + id;
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(productDetails),
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
  });
};

export default {
  getAllProducts,
  createOrder,
  createProduct,
  updateProductDetails,
};
