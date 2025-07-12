import UI from "./ui.js";
import { getGames } from "./home.js";
import themeSwitch from "./themeUI.js";
themeSwitch();
function showSpinner() {
  document.getElementById("loadingSpinner").classList.remove("d-none");
}

function hideSpinner() {
  document.getElementById("loadingSpinner").classList.add("d-none");
}
document.addEventListener("DOMContentLoaded", async () => {
  const ui = new UI(".box");

  try {
    showSpinner();
    const games = await getGames();
    ui.displayData(games);
  } catch (err) {
    console.error("Failed to fetch games:", err);
  } finally {
    setTimeout(() => hideSpinner(), 300);
  }
  const links = document.querySelectorAll(".nav-link");

  links.forEach((link) => {
    link.addEventListener("click", async function () {
      links.forEach((el) => el.classList.remove("clicked"));

      this.classList.add("clicked");
      const category = this.getAttribute("data-category");

      try {
        showSpinner();
        const games = await getGames(category);
        ui.displayData(games);
      } catch (err) {
        console.error(`Failed to fetch games for ${category}:`, err);
      } finally {
        setTimeout(() => hideSpinner(), 300);
      }
    });
  });
});
