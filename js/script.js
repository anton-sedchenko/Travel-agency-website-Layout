'use strict';

const links = document.querySelectorAll('.nav__list__item');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        links.forEach(l => l.classList.remove('nav__list__item-active'));
        link.classList.add('nav__list__item-active');
    });
});
