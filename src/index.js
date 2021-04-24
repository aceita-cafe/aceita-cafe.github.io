import { headerDropdown } from "./js/header";

document.querySelector('#dropdownButton').addEventListener('click', headerDropdown);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdown = document.getElementById('headerNavDropdown');
    if (dropdown.classList.contains('is-visible')) {
      dropdown.classList.remove('is-visible');
    }
  }
})
