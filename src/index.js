import { headerDropdown } from "./js/header";
import { showcaseList } from "./js/showcase.js";
import { showcase } from "./data/showcase.json";

document.querySelector('#dropdownButton').addEventListener('click', headerDropdown);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdown = document.getElementById('headerNavDropdown');
    if (dropdown.classList.contains('is-visible')) {
      dropdown.classList.remove('is-visible');
    }
  }
})

const showcaseContainer = document.querySelector(".showcase__gallery")
showcase.forEach((item) => {
  const showcaseItems = showcaseList(item);

  showcaseContainer.innerHTML = showcaseContainer.innerHTML + showcaseItems
})
