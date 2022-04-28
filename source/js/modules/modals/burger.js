const burger = document.querySelector('.burger');
const header = document.querySelector('.header');
const mainNav = document.querySelector('.nav-list');
const logoLight = header.querySelector('.logo-light');
const logoDark = header.querySelector('.logo-dark');
const body = document.querySelector('body');

const burgerOnCLick = () => {
  burger.classList.toggle('burger--close');
  mainNav.classList.toggle('nav-list--hidden');
  logoLight.classList.toggle('logo-light--inactive');
  logoDark.classList.toggle('logo-dark--active');
  body.classList.toggle('scroll-lock');
};

const burgerOnEsc = (evt) => {
  const isEsc = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEsc && !mainNav.classList.contains('nav-list--hidden')) {
    evt.preventDefault();
    burger.classList.remove('burger--close');
    mainNav.classList.add('nav-list--hidden');
    logoLight.classList.remove('logo-light--inactive');
    logoDark.classList.remove('logo-dark--active');
    body.classList.remove('scroll-lock');
  }
};

header.classList.toggle('header--nojs');
mainNav.classList.remove('nav-list--nojs');
mainNav.classList.add('nav-list--hidden');

burger.addEventListener('click', burgerOnCLick);
burger.addEventListener('keydown', burgerOnEsc);
