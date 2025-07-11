import { getGames } from "./home.js";

class UI {
  constructor(box) {
    this.container = document.querySelector(box);
  }

  displayData = (games) => {
    this.container.innerHTML = ""; // clear existing content

    games.forEach((game) => {
      const card = document.createElement("div");
      card.className = "col-12 col-md-6 col-lg-4 mb-4";

      card.innerHTML = `
        <div class="card h-100 p-4" data-game='${JSON.stringify(game)}'>
          <div class="cardPhoto">
            <img class="gamePhoto w-100 d-block" src="${game.thumbnail}" alt="${
        game.title
      }" />
          </div>
          <div class="cardHeader d-flex justify-content-between align-items-center p-2 flex-wrap">
            <p class="mb-0 text-break">${game.title}</p>
            <p class="mb-0 text-break">FREE</p>
          </div>
          <div class="cardDesc d-flex justify-content-center align-items-center text-center p-2 flex-grow-1">
            <p class="mb-0 text-break">${game.short_description}</p>
          </div>
          <div class="cardFooter d-flex justify-content-between align-items-center flex-wrap border-top">
            <p class="mb-0 text-break pt-2">${game.genre}</p>
            <p class="mb-0 text-break pt-2">${game.platform}</p>
          </div>
        </div>
      `;

      this.container.appendChild(card);
    });
  };
}

export default UI;
