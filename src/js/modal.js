import { data } from "../data/modal.json";

const variationElement = document.querySelector("[data-variation]");

const openModal = (id) => {
  variationElement.innerHTML = data[id][1];
};

window.openModal = openModal;
