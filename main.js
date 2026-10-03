let cart = [];
let cartCount = document.getElementById("cart-count");

function updateCartCount() {
  cartCount.textContent = cart.length;
}

let allButtons = document.querySelectorAll(".button");
allButtons.forEach(function (button) {
  if (button.textContent.trim() === "ADD TO CART") {
    button.onclick = function () {
      let card = button.closest(".single-card, .arrival-card, .hero-left");
      let name;
      let priceText;

      if (card.classList.contains("hero-left")) {
        name = "Watch Collection 2026";
        priceText = card.querySelector("h4").textContent;}
      else {
        name = card.querySelector("h4").textContent;
        priceText = card.querySelector("p").textContent;}
        
      let price = Number(priceText.replace("₹", ""));
      cart.push({ name: name, price: price });
      updateCartCount();
    };
  }});

document.querySelector(".disc-btn").onclick = function () {
  document.getElementById("product").scrollIntoView({ behavior: "smooth" });
};

updateCartCount();
var tl = gsap.timeline()
tl.from("#loader h3", {
  x:40,
  opacity:0,
  stagger:0.2,
})

tl.to("#loader h3", {
  opacity:0,
  x:-40,
  duration:1,
  stagger:0.1
})

tl.to("#loader", {
  opacity:0,
  display:"none"
})
