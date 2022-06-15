
const linkTheme = document.querySelector("#link-theme");
const btnTheme = document.querySelector(".button-switcher");
const logoTheme = document.querySelector("#logo-theme");

btnTheme.addEventListener('click', () => {
    let isLightTheme = btnTheme.classList.toggle('light-theme');
    btnTheme.classList.toggle('dark-theme');

    if(isLightTheme){
        linkTheme.setAttribute('href', './styles/light-theme.css');
        logoTheme.setAttribute('src', './assets/logo-light-theme.svg');
    }else{
        linkTheme.setAttribute('href', './styles/dark-theme.css');
        logoTheme.setAttribute('src', 'assets/logo-dark-theme.svg');
    }

});