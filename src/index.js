import { headerDropdown, activeHome, activeProducts} from "./js/header";
import { showcaseList } from "./js/showcase.js";
import { showcase } from "./data/showcase.json";
import { openModal } from './js/modal.js';

document.querySelector('#dropdownButton').addEventListener('click', headerDropdown);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdown = document.getElementById('headerNavDropdown');
    if (dropdown.classList.contains('is-visible')) {
      dropdown.classList.remove('is-visible');
    }
  }
})

const showcaseContainer = document.querySelector(".showcase__list")
showcase.forEach((item) => {
  const showcaseItems = showcaseList(item);

  showcaseContainer.innerHTML = showcaseContainer.innerHTML + showcaseItems
})

Modernizr.on('webp', function(result) {
  if (result) {
    document.querySelector('.hero').classList.toggle('hero__webp')
    document.querySelector('.plan').classList.toggle('plan__webp')

  } else {
    document.querySelector('.hero').classList.toggle('hero__no-webp')
    document.querySelector('.plan').classList.toggle('plan__no-webp')
  }
});

window.openModal = openModal;
