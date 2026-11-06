const state = {
  starCount: 0,
};

// Add a star to the page and update the star count
const addStar = () => {
  state.starCount += 1;

  const starCountContainer = document.querySelector('#starCount');
  starCountContainer.textContent = `Star Count: ${state.starCount}`;

  const newStar = document.createElement('span');
  const starContainer = document.querySelector('#starContainer');

  newStar.textContent = '⭐';
  starContainer.appendChild(newStar);
};

// Change the active theme
const setTheme = (theme) => {
  const body = document.body;

  body.classList.remove('cosmic-night', 'celestial-day');
  body.classList.add(theme);
};

// Register the theme button event handlers
const registerThemeHandlers = () => {
  const cosmicNightButton = document.querySelector('#cosmicNightButton');
  const celestialDayButton = document.querySelector('#celestialDayButton');

  cosmicNightButton.addEventListener('click', () => {
    setTheme('cosmic-night');
  });

  celestialDayButton.addEventListener('click', () => {
    setTheme('celestial-day');
  });
};

// Register all event handlers after the page has loaded
const registerEventHandlers = () => {

  const starButton = document.querySelector('#addStarButton');
  
  starButton.addEventListener('click', addStar);
  registerThemeHandlers();
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);

