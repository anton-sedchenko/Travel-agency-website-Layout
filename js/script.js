'use strict';

const links = document.querySelectorAll('.nav__list__item');
const header = document.querySelector('.header');
const navLogo = document.querySelector('.nav__logo');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(l => l.classList.remove('nav__list__item-active'));
        link.classList.add('nav__list__item-active');
    });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 75) {
        header.classList.add('header-sticky');
        navLogo.src = 'img/logo-2.svg';
    } else {
        header.classList.remove('header-sticky');
        navLogo.src = 'img/logo.svg';
    }
});
