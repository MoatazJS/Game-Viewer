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
});
