import { products } from "./data/products.json" 
import { openModal } from './js/modal.js'
import { headerDropdown } from "./js/header";

const productsList = (products) => {
  return `
  <li class="list__item">
    <picture>
      <source srcset="${products.webp}" type="image/webp">
      <source srcset="${products.png}" type="image/png">
      <img class="showcase__images" src="${products.png}" alt="Coffee" />
    </picture>
    <div class="showcase__container">
      <h5 class="showcase__name">${products.name}</h5>
      <button class="button button--stroke button--details" onclick="openModal(${products.id})">Detalhes</button>
      <a class="button button--whatsapp" href="https://wa.me/556699511499" target="_blank">Comprar</a>
    </div>
  </li>
  `
}

const productsContainer = document.querySelector(".products__list")
products.forEach((item) => {
  const productsItems = productsList(item);

  productsContainer.innerHTML = productsContainer.innerHTML + productsItems
})

document.querySelector('#dropdownButton').addEventListener('click', headerDropdown);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdown = document.getElementById('headerNavDropdown');
    if (dropdown.classList.contains('is-visible')) {
      dropdown.classList.remove('is-visible');
    }
  }
})

window.openModal = openModal;
