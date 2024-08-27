import { productsData } from "./products.js";
const menu = document.querySelector(".menu");
let nav = document.querySelector(".header .navbar");
const logo = document.querySelector(".logo");

// ? GET DATA
class Products {
  getProduct() {
    return productsData;
  }
}
// ? SHOW DATA
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((item) => {
      result += `<div class="card" id="card">
        <div class="card__image">
          <img src=${item.imageUrl} alt="">
        </div>
        <p class="card__title">${item.title}</p>
        <p class="card__price">${item.price}$</p>
        <p class="card__description">${item.desc}</p>
        <button type="submit" href="${item.href}" class="btn card__btn" data-id=${item.id}>ORDER NOW</button>
       </div>`;
      menu.innerHTML = result;
    });
  }
}
// ? LOCAL STORAGE
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const products = new Products();
  const productsData = products.getProduct();
  const ui = new UI();
  ui.displayProducts(productsData);
  Storage.saveProducts(productsData);

  // ? When button clicked
  const cardBtn = document.querySelectorAll(".card__btn");
  let cards = [...cardBtn];
  cards.forEach((item) => {
    item.addEventListener("click", () => {
      item.innerHTML = "added to cart";
    });
  });
});

document.querySelector("#menu").addEventListener("click", () => {
  nav.classList.add("active");
});
document.querySelector("#close").addEventListener("click", () => {
  nav.classList.remove("active");
});

// ? mouse move
document.addEventListener("mousemove", move);

function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerWidth - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// ? Animation
gsap.from(".logo", { opacity: 0, duration: 1, delay: 2, y: 10 });
gsap.from(".navbar .nav_item", {
  opacity: 0,
  duration: 1,
  delay: 2 - 1,
  y: 30,
  stagger: 0.2,
});

gsap.from(".title", { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from(".description", { opacity: 0, duration: 1, delay: 1.8, y: 30 });
gsap.from(".btn", { opacity: 0, duration: 1, delay: 2.1, y: 30 });
gsap.from(".image", { opacity: 0, duration: 1, delay: 2.6, y: 30 });
gsap.from(".menu", { opacity: 0, duration: 1, delay: 2.6, y: 30 });
gsap.from(".about__desc", { opacity: 0, duration: 1, delay: 1.8, y: 30 });

// ? Logic for changing background color when we scroll !
const myNav = document.querySelector(".header");
window.onscroll = () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    myNav.classList.add("nav-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
  }
};

// ? Btn events
