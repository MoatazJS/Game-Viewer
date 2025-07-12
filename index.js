import UI from "./ui.js";
import { getGames } from "./home.js";

document.addEventListener("DOMContentLoaded", async () => {
  const ui = new UI(".box");

  try {
    const games = await getGames();
    ui.displayData(games);
  } catch (err) {
    console.error("Failed to fetch games:", err);
  }
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", async function () {
      const category = this.getAttribute("data-category");

      try {
        const games = await getGames(category);
        ui.displayData(games);
      } catch (err) {
        console.error(`Failed to fetch games for ${category}:`, err);
      }
    });
  });
});
