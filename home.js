let links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", async function () {});
});

export async function getGames(category = "mmorpg") {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "6a81310b0cmsh26f6d5dbbc0e068p15aa67jsn6ba35de7bce2",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const api = await fetch(
    `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
    options
  );
  const res = await api.json();

  return res;
}
