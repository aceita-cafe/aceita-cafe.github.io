export const showcaseList = (showcase) => {
  return `
  <li class="list__item">
    <picture>
      <source srcset="${showcase.webp}" type="image/webp">
      <source srcset="${showcase.png}" type="image/png">
      <img class="showcase__images" src="${showcase.png}" alt="Coffee" />
    </picture>
    <div class="showcase__container">
      <h5 class="showcase__name">${showcase.name}</h5>
      <button class="button button--stroke button--details" onclick="openModal(${showcase.id})">Detalhes</button>
      <a class="button button--whatsapp" href="https://wa.me/556699511499" target="_blank" rel="noopener">Comprar</a>
    </div>
  </li>
  `
}
