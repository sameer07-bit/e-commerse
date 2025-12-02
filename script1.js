// ---------------------- SIMPLE LOGIN ----------------------
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "sameer" && password === "sameer") {
      localStorage.setItem("loginUser", username);
      alert("Login successful!");
       window.location.href = "home.html";
      return true;
    } else {
      alert("Invalid username or password");
      return false;
    }
  });
}

// ---------------------- CART SYSTEM ----------------------
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addtocart(name, price) {
let user = localStorage.getItem("loginUser");

if (!user) {
  alert("please login first!!");
  window.location.href = "index.html";
  return;
}



  cart.push({ name, price: Number(price) });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added!");
  showCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function showCart() {
  const box = document.getElementById("cart-items");
  if (!box) return;

  box.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    box.innerHTML += `<p>${item.name} - $${item.price} 
      <button onclick="removeFromCart(${index})">Remove</button>
    </p>`;
    total += item.price;
  });

  const totalEl = document.getElementById("total");
  if (totalEl) totalEl.innerText = "total: $" + total;
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

    alert("Order Placed Successfully!");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
  });
}
//......................USER PRINT .................................
