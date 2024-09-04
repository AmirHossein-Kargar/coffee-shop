import { productsData } from "./products.js";
const menu = document.querySelector(".menu");
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
      item.classList.add("card__btn-clicked");
    });
  });
});
