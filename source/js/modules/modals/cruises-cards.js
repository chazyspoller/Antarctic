const cruisesCards = document.querySelectorAll('[data-card]');

const activeJS = () => {
  cruisesCards.forEach((card) => card.classList.remove('cruises-item--nojs'));
};

const onCardClick = (evt) => {
  const cardInfo = evt.target.closest('.cruises-item');

  cruisesCards.forEach((elem) => {
    if (elem.getAttribute('data-card') !== cardInfo.getAttribute('data-card')) {
      elem.classList.remove('cruises-item--nojs');
    }
  });

  cardInfo.classList.toggle('cruises-item--nojs');
};

const openInfoCards = () => {
  if (cruisesCards.length) {
    activeJS();
    cruisesCards.forEach((card) => {
      card.addEventListener('click', onCardClick);
    });
  }
};

export {openInfoCards};
