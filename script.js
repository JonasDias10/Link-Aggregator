const linkTheme = document.querySelector("#link-theme");
const btnTheme = document.querySelector(".button-switcher");
const logoTheme = document.querySelector("#logo-theme");

const lightThemePath = './styles/light-theme.css';
const darkThemePath = './styles/dark-theme.css';

const logoLightPath = './assets/icons/logo-light-theme.svg';
const logoDarkPath = './assets/icons/logo-dark-theme.svg';

btnTheme.addEventListener('click', () => {
    let isLightTheme = btnTheme.classList.toggle('light-theme');
    btnTheme.classList.toggle('dark-theme');
    const isTrue = true;

    if(isLightTheme === isTrue){
        linkTheme.setAttribute('href', lightThemePath);
        logoTheme.setAttribute('src', logoLightPath);
    }else{
        linkTheme.setAttribute('href', darkThemePath);
        logoTheme.setAttribute('src', logoDarkPath);
    }
});