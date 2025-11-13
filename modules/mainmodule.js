// 4
import products from "./prodetails.js";
import addCart from "./addcart.js";
import placeOrder from "./placeorder.js";

console.log("Available Products:👇🔽");
products.forEach((product, index) => {
  console.log(
    `Product-${index + 1}: Name: ${product.productName}, Price: ${product.productPrice}`
  );
});

let selectedProduct = addCart("Mobile");
console.log(selectedProduct);

placeOrder(selectedProduct);
