import { data } from "../data/modal.json";

const coffeeName = document.querySelector("[data-name]");
const coffeeVariation = document.querySelector("[data-variation]");
const coffeeSensory = document.querySelector("[data-sensory");
const coffeeProcess = document.querySelector("[data-process");
const coffeeHighLights = document.querySelector("[data-highlights");
const coffeeMadeBy = document.querySelector("[data-madeby");
const coffeeAltitude = document.querySelector("[data-altitude");
const coffeeRegion = document.querySelector("[data-region");


const openModal = (id) => {
  coffeeName.innerHTML = data[id].name;
  coffeeVariation.innerHTML = data[id].variation;
  coffeeSensory.innerHTML = data[id].sensory;
  coffeeProcess.innerHTML = data[id].process;
  coffeeHighLights.innerHTML = data[id].highlights;
  coffeeMadeBy.innerHTML = data[id].madeby;
  coffeeAltitude.innerHTML = data[id].altitude;
  coffeeRegion.innerHTML = data[id].region;
};

document.getElementById('modal').classList.toggle('flex-desative');

window.addEventListener('click', function(act) {
  if (!act.target.matches("[data-modal]")) {
    var flex = document.getElementById('modal');
    
    if (flex.classList.contains('flex-desative')) {
      flex.classList.remove('flex-desative');
      flex.classList.toggle('flex-active')
    }

    if (flex.classList.contains('flex-desative')) {
      flex.classList.remove('flex-desative');
      flex.classList.toggle('flex-active')
    }
  }
})

window.openModal = openModal;

