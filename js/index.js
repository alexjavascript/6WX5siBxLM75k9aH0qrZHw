const THEME_ATTRIBUTE = 'data-theme';

const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const root = document.documentElement;
const toggler = document.querySelector('#theme-toggle-button');

const setDarkTheme = () => {
  root.setAttribute(THEME_ATTRIBUTE, Themes.DARK);
  toggler.classList.add('rcs-ui-header__button_active');
}

const setLightTheme = () => {
  root.setAttribute(THEME_ATTRIBUTE, Themes.LIGHT);
  toggler.classList.remove('rcs-ui-header__button_active');
}

const themeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const setSystemTheme = () => {
  const isSystemDark = themeMediaQuery.matches;

  if (isSystemDark) {
    setDarkTheme();
    return;
  }

  setLightTheme();
}

setSystemTheme();

const handleThemeMediaQueryChange = () => {
  setSystemTheme();
};

themeMediaQuery.addEventListener('change', setSystemTheme);

const toggleTheme = () => {
  const theme = root.getAttribute(THEME_ATTRIBUTE);

  if (theme === Themes.DARK) {
    setLightTheme();
    return;
  }  

  setDarkTheme();
};

const handleButtonClick = (event) => {
  event.preventDefault();
  toggleTheme();
};

toggler.addEventListener('click', handleButtonClick);
