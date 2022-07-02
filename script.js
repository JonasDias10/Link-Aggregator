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

const url = 'https://api.github.com/users/jonasdias10';
function getProfilePhoto(){
    fetch(url)
    .then((response) => response.json())
    .then((data) => profilePhoto.src = data.avatar_url)
    .catch((err) => console.error(err))
}

getProfilePhoto();