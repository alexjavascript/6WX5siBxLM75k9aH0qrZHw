const THEME_ATTRIBUTE = 'data-theme';

const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const root = document.documentElement;
const toggler = document.querySelector('#theme-toggle-button');

const setDarkTheme = () => root.setAttribute(THEME_ATTRIBUTE, Themes.DARK);
const setLightTheme = () => root.setAttribute(THEME_ATTRIBUTE, Themes.LIGHT);

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

  console.log(1);

  root.setAttribute(
    THEME_ATTRIBUTE, 
    theme === Themes.LIGHT 
      ? Themes.DARK 
      : Themes.LIGHT,
  );

  toggler.classList.toggle('rcs-ui-header__button_active');
};

const handleButtonClick = (event) => {
  event.preventDefault();
  toggleTheme();
};

toggler.addEventListener('click', handleButtonClick);
