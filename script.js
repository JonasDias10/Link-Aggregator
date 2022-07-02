const linkTheme = document.querySelector("#link-theme");
const btnTheme = document.querySelector(".button-switcher");

const lightThemePath = './styles/light-theme.css';
const darkThemePath = './styles/dark-theme.css';

btnTheme.addEventListener('click', () => {
    let isLightTheme = btnTheme.classList.toggle('light-theme');
    btnTheme.classList.toggle('dark-theme');
    const isTrue = true;

    if(isLightTheme === isTrue)
        linkTheme.href =  lightThemePath;
    else
        linkTheme.href = darkThemePath;
});