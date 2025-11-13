// 2
import products from "./prodetails.js";

function addCart(pName) {
  let product = products.find((p) => {
    return p.productName === pName;
  });
  console.log(`${product.productName} and ${product.productPrice} added to the cart successfully🛒`);
  return product;
}
export default addCart;
