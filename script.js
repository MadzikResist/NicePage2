const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navigation');
const buttonX = document.querySelector('.xButton');
const container = document.querySelector('.container')

const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('navigation--active');
    buttonX.classList.toggle('nav');
    container.classList.toggle('container--active');

}

hamburger.addEventListener('click', handleClick);
buttonX.addEventListener('click', handleClick);