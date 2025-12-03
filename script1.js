// ---------------------- LOGIN ----------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "admin") {
      localStorage.setItem("loginUser", "admin");
      alert("Login Successful!");
      window.location.href = "index.html";
    } else {
      alert("Wrong username or password");
    }
  });
}

// ---------------------- CART SYSTEM ----------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addtocart(name, price) {
  let user = localStorage.getItem("loginUser");

  if (!user) {
    alert("Please login first!");
    window.location.href = "login.html";
    return;
  }

  cart.push({ name, price: Number(price) });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
  showCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function showCart() {
  const cartBox = document.getElementById("cart-items");
  if (!cartBox) return;

  cartBox.innerHTML = "";
  let total = 0;

  cart.forEach((item, i) => {
    cartBox.innerHTML += `
      <p>${item.name} - $${item.price}
        <button onclick="removeFromCart(${i})">Remove</button>
      </p>
    `;
    total += item.price;
  });

  const totalEl = document.getElementById("total");
  if (totalEl) totalEl.textContent = "Total: $" + total;
}

showCart();

// ---------------------- CHECKOUT ----------------------
const checkoutBtn = document.getElementById("checkout-btn");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert("Order placed successfully!");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
  });
}
