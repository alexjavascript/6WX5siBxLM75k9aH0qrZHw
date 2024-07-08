const THEME_ATTRIBUTE = 'data-theme';
const Themes = {
  LIGHT: 'light',
  DARK: 'dark',
};

const root = document.documentElement;
const button = document.querySelector('#theme-toggle-button')

const toggleTheme = () => {
  const theme = root.getAttribute(THEME_ATTRIBUTE);

  root.setAttribute(
    THEME_ATTRIBUTE, 
    theme === Themes.LIGHT 
      ? Themes.DARK 
      : Themes.LIGHT,
  );

  button.classList.toggle('rcs-ui-header__button_active');
};

const handleButtonClick = (event) => {
  event.preventDefault();
  toggleTheme();
};

button.addEventListener('click', handleButtonClick);
