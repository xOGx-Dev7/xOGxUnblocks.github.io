const categories = [
  { id: 'all', label: 'All', subtitle: 'Browse every category' },
  { id: 'horror', label: 'Horror', subtitle: 'Scary, tense, and unforgettable' },
  { id: 'multiplayer', label: 'Multiplayer', subtitle: 'Battle with friends and rivals' },
  { id: 'shooting', label: 'Shooting', subtitle: 'Fast reactions, big action' },
  { id: 'racing', label: 'Racing', subtitle: 'High-speed circuits and drift mayhem' },
  { id: 'sports', label: 'Sports', subtitle: 'Fast arcade sports action' },
  { id: 'strategy', label: 'Strategy', subtitle: 'Plan, build, and conquer' },
  { id: 'adventure', label: 'Adventure', subtitle: 'Questing through mysterious worlds' },
  { id: 'puzzle', label: 'Puzzle', subtitle: 'Brain-teasing logic challenges' },
  { id: 'arcade', label: 'Arcade', subtitle: 'Classic quick-hit gameplay' },
  { id: 'fantasy', label: 'Fantasy', subtitle: 'Magic, dragons, and epic quests' },
  { id: 'scifi', label: 'Sci-Fi', subtitle: 'Futuristic action and space drama' },
  { id: 'platformer', label: 'Platformer', subtitle: 'Precision jumping and movement' },
  { id: 'survival', label: 'Survival', subtitle: 'Stay alive against the odds' },
  { id: 'stealth', label: 'Stealth', subtitle: 'Sneak, hide, and outsmart foes' },
  { id: 'mystery', label: 'Mystery', subtitle: 'Investigate secrets and hidden plots' },
  { id: 'rhythm', label: 'Rhythm', subtitle: 'Beat-driven music challenges' },
  { id: 'exploration', label: 'Exploration', subtitle: 'Discover wide-open worlds' },
  { id: 'simulation', label: 'Simulation', subtitle: 'Realistic systems and management' },
  { id: 'retro', label: 'Retro', subtitle: 'Pixel-perfect nostalgia' },
  { id: 'rpg', label: 'RPG', subtitle: 'Character growth and story-driven play' },
  { id: 'builders', label: 'Builders', subtitle: 'Construct your own worlds' },
  { id: 'battle', label: 'Battle', subtitle: 'Intense fighting arenas' },
  { id: 'parkour', label: 'Parkour', subtitle: 'Speedy movement and precision' },
  { id: 'driving', label: 'Driving', subtitle: 'Turbocharged street action' },
  { id: 'quest', label: 'Quest', subtitle: 'Epic journeys and hidden treasures' }
];

const gameData = [
  { title: 'Midnight Escape', category: 'horror', icon: '👻', desc: 'Survive the clinic before the lights die.' },
  { title: 'Ghost Sprint', category: 'horror', icon: '🕯️', desc: 'Outrun the shadows in a cursed maze.' },
  { title: 'Shadow Ops', category: 'horror', icon: '🌙', desc: 'Stealth through ghost-filled corridors.' },
  { title: 'Arena Clash', category: 'multiplayer', icon: '⚔️', desc: 'Team up or duel in a neon arena.' },
  { title: 'Pixel Dash', category: 'multiplayer', icon: '🚀', desc: 'Race and battle in fast online rounds.' },
  { title: 'Base Builders', category: 'multiplayer', icon: '🧱', desc: 'Forge defenses and outsmart rivals.' },
  { title: 'Blast Zone', category: 'shooting', icon: '🔫', desc: 'Arcade shooting with precision movement.' },
  { title: 'Sniper Rush', category: 'shooting', icon: '🎯', desc: 'Pure reflexes and target tracking.' },
  { title: 'Skyfire', category: 'shooting', icon: '☄️', desc: 'Dogfight across a glowing skyline.' },
  { title: 'Turbo Drift', category: 'racing', icon: '🏎️', desc: 'Street racing with big jumps and nitro.' },
  { title: 'Neon Circuit', category: 'racing', icon: '⚡', desc: 'High-speed tracks under a cyber sunset.' },
  { title: 'Street Charge', category: 'racing', icon: '🏁', desc: 'Fast lanes and reckless drift action.' },
  { title: 'Goal Rush', category: 'sports', icon: '⚽', desc: 'A quick-fire football arcade mode.' },
  { title: 'Dunk Storm', category: 'sports', icon: '🏀', desc: 'Fast-paced basketball chaos.' },
  { title: 'Hyper Hoops', category: 'sports', icon: '🏐', desc: 'Bounce, boost, and score in style.' },
  { title: 'Empire Forge', category: 'strategy', icon: '🛡️', desc: 'Build, expand, and conquer the map.' },
  { title: 'Puzzle Rift', category: 'strategy', icon: '🧠', desc: 'Solve your way through branching levels.' },
  { title: 'Siege Command', category: 'strategy', icon: '⚙️', desc: 'Manage troops and crush the enemy.' },
  { title: 'Lost City', category: 'adventure', icon: '🏞️', desc: 'Explore ruins in a jungle of secrets.' },
  { title: 'Rift Wanderer', category: 'adventure', icon: '🧭', desc: 'Journey through shifting landscapes.' },
  { title: 'Ember Trail', category: 'adventure', icon: '🔥', desc: 'Hunt the horizon for hidden relics.' },
  { title: 'Mind Maze', category: 'puzzle', icon: '🧩', desc: 'Solve rooms packed with clever traps.' },
  { title: 'Quantum Blocks', category: 'puzzle', icon: '🔷', desc: 'Rearrange physics in a glowing grid.' },
  { title: 'Color Flux', category: 'puzzle', icon: '🎨', desc: 'Match lights to unlock each stage.' },
  { title: 'Cosmic Spin', category: 'arcade', icon: '🛸', desc: 'Fast reflex play under neon lights.' },
  { title: 'Turbo Tap', category: 'arcade', icon: '🎮', desc: 'Tap combos to beat the leaderboard.' },
  { title: 'Neon Breaker', category: 'arcade', icon: '✨', desc: 'A shiny twist on classic arcade action.' },
  { title: 'Dragon Song', category: 'fantasy', icon: '🐲', desc: 'Ride dragons through enchanted skies.' },
  { title: 'Crystal Keep', category: 'fantasy', icon: '🧙', desc: 'Cast spells to defend the kingdom.' },
  { title: 'Spellfall', category: 'fantasy', icon: '🔮', desc: 'Collect runes and dominate the arena.' },
  { title: 'Astro Command', category: 'scifi', icon: '🚀', desc: 'Pilot a starship through alien space.' },
  { title: 'Nano Strike', category: 'scifi', icon: '🛰️', desc: 'Hack robots and survive the grid.' },
  { title: 'Orbital Rush', category: 'scifi', icon: '🌌', desc: 'Speed through orbital lanes and debris.' },
  { title: 'Jump Forge', category: 'platformer', icon: '🪂', desc: 'Leap over traps on floating platforms.' },
  { title: 'Gravity Run', category: 'platformer', icon: '🌀', desc: 'Flip gravity to clear each zone.' },
  { title: 'Platform Pulse', category: 'platformer', icon: '⚡', desc: 'Move fast through shifting stages.' },
  { title: 'Island Outpost', category: 'survival', icon: '🏝️', desc: 'Gather, build, and survive the night.' },
  { title: 'Nightfall Camp', category: 'survival', icon: '🌙', desc: 'Defend your base from endless waves.' },
  { title: 'Frost Edge', category: 'survival', icon: '❄️', desc: 'Stay warm and fight off the cold.' },
  { title: 'Silent Shadow', category: 'stealth', icon: '🕵️', desc: 'Sneak past enemies without a sound.' },
  { title: 'Ghost Protocol', category: 'stealth', icon: '🥷', desc: 'Complete covert missions in darkness.' },
  { title: 'Hidden Path', category: 'stealth', icon: '🌑', desc: 'Use cover and cunning to survive.' },
  { title: 'Clue Manor', category: 'mystery', icon: '🕯️', desc: 'Uncover secrets in a haunted estate.' },
  { title: 'Echo Noir', category: 'mystery', icon: '🕵️‍♂️', desc: 'Solve the case under city lights.' },
  { title: 'Secret Archive', category: 'mystery', icon: '📚', desc: 'Find hidden evidence in ancient texts.' },
  { title: 'Beat Surge', category: 'rhythm', icon: '🎧', desc: 'Hit the rhythm and chain the beats.' },
  { title: 'Neon Tempo', category: 'rhythm', icon: '🎶', desc: 'Sync to the music in a bright city.' },
  { title: 'Pulse Runner', category: 'rhythm', icon: '🎵', desc: 'Run to the sound of the neon pulse.' },
  { title: 'Star Voyager', category: 'exploration', icon: '🗺️', desc: 'Map out uncharted planets and ruins.' },
  { title: 'Deep Trek', category: 'exploration', icon: '🪐', desc: 'Explore hidden depths of strange worlds.' },
  { title: 'Horizon Drift', category: 'exploration', icon: '🌄', desc: 'Roam far landscapes on a luminous horizon.' },
  { title: 'Space Station', category: 'simulation', icon: '🏗️', desc: 'Manage life and systems in orbit.' },
  { title: 'City Architect', category: 'simulation', icon: '🏙️', desc: 'Design and grow your dream city.' },
  { title: 'Farmstead Daily', category: 'simulation', icon: '🚜', desc: 'Run a cozy farm with charming tasks.' },
  { title: 'Pixel Quest', category: 'retro', icon: '🕹️', desc: 'Classic pixel action with modern twists.' },
  { title: 'Block Runner', category: 'retro', icon: '🎲', desc: 'Jump and dodge in an 8-bit landscape.' },
  { title: '8-Bit Blitz', category: 'retro', icon: '📼', desc: 'Fast-paced retro arcade mayhem.' },
  { title: "Hero's Journey", category: 'rpg', icon: '🗡️', desc: 'Grow your hero and conquer the world.' },
  { title: 'Mystic Saga', category: 'rpg', icon: '🛡️', desc: 'Choose your story and master your skills.' },
  { title: 'Questbound', category: 'rpg', icon: '🏹', desc: 'Collect gear and fight for glory.' },
  { title: 'Fortress Craft', category: 'builders', icon: '🏰', desc: 'Design and defend your own fortress.' },
  { title: 'Village Rise', category: 'builders', icon: '🏡', desc: 'Build a thriving town from scratch.' },
  { title: 'Sky Architects', category: 'builders', icon: '🧱', desc: 'Construct sky bridges and floating cities.' },
  { title: 'Mech Arena', category: 'battle', icon: '🤖', desc: 'Fight in a fast-paced robot arena.' },
  { title: 'Warfront Squad', category: 'battle', icon: '💥', desc: 'Lead your squad into explosive battles.' },
  { title: 'Clash Zone', category: 'battle', icon: '⚔️', desc: 'Dominate the arena in quick matches.' },
  { title: 'Roofrunner', category: 'parkour', icon: '🏃', desc: 'Dash over rooftops with precision.' },
  { title: 'Speed Vault', category: 'parkour', icon: '💨', desc: 'Clear gaps with fast parkour moves.' },
  { title: 'Urban Leap', category: 'parkour', icon: '🦘', desc: 'Chain tricks through the cityscape.' },
  { title: 'Drift King', category: 'driving', icon: '🚗', desc: 'Dominate the drift courses with style.' },
  { title: 'Highway Havoc', category: 'driving', icon: '🛣️', desc: 'Outrun rivals on busy highways.' },
  { title: 'Turbo Rally', category: 'driving', icon: '🏁', desc: 'Race through wild tracks to victory.' },
  { title: 'Ancient Scroll', category: 'quest', icon: '📜', desc: 'Find lost relics on a grand quest.' },
  { title: 'Crown Seeker', category: 'quest', icon: '👑', desc: 'Journey across kingdoms for glory.' },
  { title: 'Temple Run', category: 'quest', icon: '🏛️', desc: 'Escape traps while collecting treasures.' }
];

const allGamesGrid = document.getElementById('allGamesGrid');
const sectionContainer = document.getElementById('sectionContainer');
const searchInput = document.getElementById('searchInput');
const chipRow = document.getElementById('chipRow');

function createCard(game) {
  const card = document.createElement('article');
  card.className = 'game-card';

  card.innerHTML = `
    <div>
      <div class='game-icon'>${game.icon}</div>
      <h3>${game.title}</h3>
      <p>${game.desc}</p>
    </div>
    <div class='tag-row'>
      <span class='tag'>${categories.find((cat) => cat.id === game.category)?.label || game.category}</span>
      <span class='tag'>online</span>
    </div>
  `;

  return card;
}

function renderChips() {
  chipRow.innerHTML = '';
  categories.forEach((category) => {
    const button = document.createElement('button');
    button.className = `chip${category.id === 'all' ? ' active' : ''}`;
    button.dataset.filter = category.id;
    button.textContent = category.label;
    button.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach((chip) => chip.classList.remove('active'));
      button.classList.add('active');
      updateDisplay(category.id, searchInput.value);
    });
    chipRow.appendChild(button);
  });
}

function renderSections(filter = 'all', term = '') {
  const query = term.toLowerCase();
  sectionContainer.innerHTML = '';

  categories
    .filter((category) => category.id !== 'all')
    .forEach((category) => {
      const items = gameData.filter((game) => {
        const categoryMatch = filter === 'all' || game.category === filter;
        const textMatch = `${game.title} ${game.desc} ${category.label}`.toLowerCase().includes(query);
        return categoryMatch && textMatch && game.category === category.id;
      });

      if (!items.length) return;

      const section = document.createElement('section');
      section.className = 'section-block';
      section.id = category.id;
      section.innerHTML = `
        <div class='section-head'>
          <h2>${category.label}</h2>
          <span>${category.subtitle}</span>
        </div>
        <div class='card-grid'></div>
      `;

      const grid = section.querySelector('.card-grid');
      items.forEach((game) => grid.appendChild(createCard(game)));
      sectionContainer.appendChild(section);
    });
}

function renderAllGames(filter = 'all', term = '') {
  const query = term.toLowerCase();
  const visibleGames = gameData.filter((game) => {
    const categoryMatch = filter === 'all' || game.category === filter;
    const textMatch = `${game.title} ${game.desc} ${categories.find((cat) => cat.id === game.category)?.label || game.category}`
      .toLowerCase()
      .includes(query);
    return categoryMatch && textMatch;
  });

  allGamesGrid.innerHTML = '';
  visibleGames.slice(0, 72).forEach((game) => allGamesGrid.appendChild(createCard(game)));
}

function updateDisplay(filter = 'all', term = '') {
  renderSections(filter, term);
  renderAllGames(filter, term);
}

renderChips();
updateDisplay();

searchInput.addEventListener('input', (event) => {
  const activeFilter = document.querySelector('.chip.active')?.dataset.filter || 'all';
  updateDisplay(activeFilter, event.target.value);
});
