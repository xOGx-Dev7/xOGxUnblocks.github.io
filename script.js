const gameData = [
  { title: "Midnight Escape", category: "horror", icon: "👻", desc: "Survive the clinic before the lights die." },
  { title: "Ghost Sprint", category: "horror", icon: "🕯️", desc: "Outrun the shadows in a cursed maze." },
  { title: "Shadow Ops", category: "horror", icon: "🌙", desc: "A stealth thriller with ghostly enemies." },
  { title: "Arena Clash", category: "multiplayer", icon: "⚔️", desc: "Team up or duel in a neon arena." },
  { title: "Pixel Dash", category: "multiplayer", icon: "🚀", desc: "Race and battle in fast online rounds." },
  { title: "Base Builders", category: "multiplayer", icon: "🧱", desc: "Forge defenses and outsmart your rivals." },
  { title: "Blast Zone", category: "shooting", icon: "🔫", desc: "Arcade shooting with precision movement." },
  { title: "Sniper Rush", category: "shooting", icon: "🎯", desc: "Pure reflexes and target tracking." },
  { title: "Skyfire", category: "shooting", icon: "☄️", desc: "Dogfight across a glowing skyline." },
  { title: "Turbo Drift", category: "racing", icon: "🏎️", desc: "Street racing with big jumps and nitro." },
  { title: "Neon Circuit", category: "racing", icon: "⚡", desc: "High-speed tracks under a cyber sunset." },
  { title: "Goal Rush", category: "sports", icon: "⚽", desc: "A quick-fire football arcade mode." },
  { title: "Dunk Storm", category: "sports", icon: "🏀", desc: "Fast-paced basketball chaos." },
  { title: "Empire Forge", category: "strategy", icon: "🛡️", desc: "Build, expand, and conquer the map." },
  { title: "Puzzle Rift", category: "strategy", icon: "🧠", desc: "Solve your way through branching levels." },
];

const sections = {
  horror: gameData.filter((game) => game.category === "horror"),
  multiplayer: gameData.filter((game) => game.category === "multiplayer"),
  shooting: gameData.filter((game) => game.category === "shooting"),
};

const allGamesGrid = document.getElementById("allGamesGrid");
const searchInput = document.getElementById("searchInput");
const chips = document.querySelectorAll(".chip");

function createCard(game) {
  const card = document.createElement("article");
  card.className = "game-card";

  card.innerHTML = `
    <div>
      <div class="game-icon">${game.icon}</div>
      <h3>${game.title}</h3>
      <p>${game.desc}</p>
    </div>
    <div class="tag-row">
      <span class="tag">${game.category}</span>
      <span class="tag">online</span>
    </div>
  `;

  return card;
}

function renderSection(sectionId, items) {
  const container = document.querySelector(`[data-section="${sectionId}"]`);
  if (!container) return;
  items.forEach((game) => container.appendChild(createCard(game)));
}

function renderAllGames(filter = "all", term = "") {
  const query = term.toLowerCase();
  const visibleGames = gameData.filter((game) => {
    const categoryMatch = filter === "all" || game.category === filter;
    const textMatch = `${game.title} ${game.desc} ${game.category}`.toLowerCase().includes(query);
    return categoryMatch && textMatch;
  });

  allGamesGrid.innerHTML = "";
  visibleGames.slice(0, 72).forEach((game) => allGamesGrid.appendChild(createCard(game)));
}

Object.entries(sections).forEach(([key, items]) => renderSection(key, items));
renderAllGames();

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
    renderAllGames(chip.dataset.filter, searchInput.value);
  });
});

searchInput.addEventListener("input", (event) => {
  const activeFilter = document.querySelector(".chip.active")?.dataset.filter || "all";
  renderAllGames(activeFilter, event.target.value);
});
