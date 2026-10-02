let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartCount = document.getElementById("cart-count");
let toast = document.getElementById("toast");
let toastTimer;

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function getCartTotal() {
  return cart.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(function () {
    toast.classList.remove("show");
  }, 2500);
}

let allButtons = document.querySelectorAll(".button");

allButtons.forEach(function (button) {
  if (button.textContent.trim() === "ADD TO CART") {
    button.onclick = function () {
      let card = button.closest(".single-card, .arrival-card, .hero-left");
      let name;
      let priceText;

      if (card.classList.contains("hero-left")) {
        name = "Watch Collection 2024";
        priceText = card.querySelector("h4").textContent;
      } else {
        name = card.querySelector("h4").textContent;
        priceText = card.querySelector("p").textContent;
      }

      let price = Number(priceText.replace("$", ""));

      cart.push({ name: name, price: price });
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartCount();
      showToast(name + " added to cart");
    };
  }
});

document.getElementById("cart-btn").onclick = function () {
  if (cart.length === 0) {
    showToast("Your cart is empty");
  } else {
    showToast(cart.length + " items | Total: $" + getCartTotal().toLocaleString());
  }
};

document.querySelector(".disc-btn").onclick = function () {
  document.getElementById("product").scrollIntoView({ behavior: "smooth" });
};

let form = document.getElementById("newsletter-form");
let emailInput = document.getElementById("email-input");
let formMsg = document.getElementById("form-msg");

form.onsubmit = function (e) {
  e.preventDefault();
  let email = emailInput.value.trim();
  let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (isValid) {
    formMsg.textContent = "Thanks for subscribing!";
    formMsg.style.color = "lightgreen";
    form.reset();
  } else {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "salmon";
  }
};

updateCartCount();