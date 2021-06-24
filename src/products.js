import { products } from "./data/products.json" 
import { openModal } from './js/modal.js'

const productsList = (products) => {
  return `
  <li class="list__item">
    <img class="showcase__images" src="${products.image}" />
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

window.openModal = openModal;
