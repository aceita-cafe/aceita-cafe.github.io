import { headerDropdown } from "./_src/js/_header";

document.querySelector('#dropdownButton').addEventListener('click', headerDropdown);

window.addEventListener('click', function(event) {
  if (!event.target.matches('#dropdownButton')) {
    var dropdown = document.getElementById('headerNavDropdown');
    if (dropdown.classList.contains('show')) {
      dropdown.classList.remove('show');
    }
  }
})
