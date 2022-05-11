const header = document.querySelector('.header');
const burger = header.querySelector('[data-open-modal="burger"]');
const mainNav = document.querySelector('[data-modal="nav-list"]');
const logoLight = header.querySelector('.logo-light');
const logoDark = header.querySelector('.logo-dark');
const body = document.querySelector('body');
const mainNavLinks = mainNav.querySelectorAll('[data-links="main-nav-link"]');
const footerLinks = document.querySelectorAll('[data-links="footer-link"]');

const checkExist = burger && header && mainNav;

const jsActive = () => {
  header.classList.remove('header--nojs');
  mainNav.classList.remove('nav-list--nojs');
};

const scrollToElement = (evt) => {
  const id = evt.target.getAttribute('href');
  const elementToGo = id.length > 1 ? document.querySelector(id) : null;

  if (id.length > 1) {
    evt.preventDefault();
  }

  if (elementToGo) {
    elementToGo.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const burgerOnClick = () => {
  if (logoLight && logoDark) {
    logoLight.classList.toggle('logo-light--inactive');
    logoDark.classList.toggle('logo-dark--active');
  }

  burger.classList.toggle('burger--close');
  mainNav.classList.toggle('nav-list--active');
  body.classList.toggle('scroll-lock');
  body.classList.toggle('scroll-lock-ios');

};

const onDocumentEscCloseMenu = (evt) => {
  const isEsc = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEsc && mainNav.classList.contains('nav-list--active')) {
    evt.preventDefault();
    burgerOnClick();
  }
};

const onDocumentCLickCloseMenu = (evt) => {
  if (mainNav.classList.contains('nav-list--active') && !mainNav.contains(evt.target) && evt.target !== burger) {
    burgerOnClick();
  }
};

const onLinkClick = () => {
  burgerOnClick();
};

const linksListener = () => {
  if (mainNavLinks.length) {
    mainNavLinks.forEach((link) => {
      link.addEventListener('click', onLinkClick);
      link.addEventListener('click', scrollToElement);
    });
  }
  if (footerLinks.length) {
    footerLinks.forEach((link) => {
      link.addEventListener('click', scrollToElement);
    });
  }
};

const activateMainNav = () => {
  if (checkExist) {
    jsActive();
    burger.addEventListener('click', burgerOnClick);
    burger.addEventListener('keydown', onDocumentEscCloseMenu);
    document.addEventListener('click', onDocumentCLickCloseMenu);
    linksListener();
  }
};

export {activateMainNav};
