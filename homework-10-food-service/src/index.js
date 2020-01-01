import items from './menu.json';
import itemTemplate from './menu-item.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');
const ul = document.querySelector('.js-menu');

// check for saved 'darkTheme' in localStorage
let darkTheme = localStorage.getItem('Theme');

const enableDarkTheme = () => {
  body.classList.add(Theme.DARK);
  body.classList.remove(Theme.LIGHT);

  localStorage.setItem('Theme', JSON.stringify(Theme.DARK));

  const checkbox = document.querySelector('input.js-switch-input');
  checkbox.setAttribute('checked', true);
};

const disableDarkTheme = () => {
  body.classList.add(Theme.LIGHT);
  body.classList.remove(Theme.DARK);

  localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
};

// If the user already visited and enabled darkTheme
// start things off with it on
if (darkTheme === JSON.stringify(Theme.DARK)) {
  enableDarkTheme();
}

// When someone clicks the button
body.addEventListener('change', event => {
  // get their darkTheme setting
  darkTheme = localStorage.getItem('Theme');
  // if it not current Theme.DARK , enable it
  if (darkTheme !== JSON.stringify(Theme.DARK)) {
    enableDarkTheme();
    // if it has been Theme.DARK, turn it off
  } else {
    disableDarkTheme();
  }
});

const createMenuMarkup = function(array) {
  const markup = array.map(item => itemTemplate(item)).join('');

  ul.insertAdjacentHTML('beforeend', markup);
};

createMenuMarkup(items);
