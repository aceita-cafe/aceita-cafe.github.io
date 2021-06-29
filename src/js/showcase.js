export const showcaseList = (showcase) => {
  return `
  <li class="list__item">
    <img class="showcase__images" src="${showcase.image}" alt="Coffee" />
    <div class="showcase__container">
      <h5 class="showcase__name">${showcase.name}</h5>
      <button class="button button--stroke button--details" onclick="openModal(${showcase.id})">Detalhes</button>
      <a class="button button--whatsapp" href="https://wa.me/556699511499" target="_blank">Comprar</a>
    </div>
  </li>
  `
}
