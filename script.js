const games = [
  { name: "Classic Snake", img: "https://i.ibb.co/4pCwzpr/snake.jpg", path: "games/snake.html" },
  { name: "Tetris Blocks", img: "https://i.ibb.co/fxfCBxP/tetris.jpg", path: "games/tetris.html" },
  { name: "Retro Pong", img: "https://i.ibb.co/sjtwcz3/pong.jpg", path: "games/pong.html" },
];

const container = document.getElementById("games-container");
const searchInput = document.getElementById("search");
const modal = document.getElementById("game-modal");
const iframe = document.getElementById("game-frame");
const closeModal = document.getElementById("close-modal");

function renderGames(list) {
  container.innerHTML = "";
  list.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");
    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}">
      <h3>${game.name}</h3>
    `;
    card.addEventListener("click", () => openGame(game.path));
    container.appendChild(card);
  });
}

function openGame(src) {
  iframe.src = src;
  modal.style.display = "flex";
}

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  iframe.src = "";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = games.filter(g => g.name.toLowerCase().includes(value));
  renderGames(filtered);
});

renderGames(games);
