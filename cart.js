const cartContainer = document.getElementById("cartContainer");
// for local Storage or empty
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("itemCount").innerText = "0 items";
    document.getElementById("subtotal").innerText = "₹0";
    document.getElementById("total").innerText = "₹0";
    return;
  }

  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity;

    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
      <img src="${item.image}">
      <div>
        <p><b>${item.name}</b></p>
        <p>₹${item.price} × ${item.quantity}</p>
      </div>
      <button class="remove-btn" onclick="removeItem(${index})">✕</button>
    `;
    cartContainer.appendChild(div);
  });

  
  document.getElementById("itemCount").innerText = `${cart.length} item${cart.length > 1 ? "s" : ""}`;
  document.getElementById("subtotal").innerText = `₹${totalPrice.toLocaleString("en-IN")}`;
  document.getElementById("total").innerText = `₹${totalPrice.toLocaleString("en-IN")}`;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();
