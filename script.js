const games = [
  { name: "Space Blaster", img: "https://picsum.photos/200/140?random=2" },
  { name: "Jungle Jump", img: "https://picsum.photos/200/140?random=3" },
  { name: "Puzzle Mania", img: "https://picsum.photos/200/140?random=4" },
  { name: "Zombie Attack", img: "https://picsum.photos/200/140?random=5" },
  { name: "Neon Runner", img: "https://picsum.photos/200/140?random=6" },
  { name: "Battle Tanks", img: "https://picsum.photos/200/140?random=7" },
  { name: "Candy Pop", img: "https://picsum.photos/200/140?random=8" },
  { name: "Drift King", img: "https://picsum.photos/200/140?random=9" },
];

const container = document.getElementById("games-container");
const searchInput = document.getElementById("search");

function renderGames(list) {
  container.innerHTML = "";
  list.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}">
      <h3>${game.name}</h3>
    `;
    card.addEventListener("click", () => alert(`Launching ${game.name}... 🚀`));
    container.appendChild(card);
  });
}

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = games.filter(g => g.name.toLowerCase().includes(value));
  renderGames(filtered);
});

renderGames(games);
