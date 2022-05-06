const cruisesCards = document.querySelectorAll('[data-card="cruise"]');

const activeJS = () => {
  cruisesCards.forEach((card) => card.classList.remove('cruises-item--nojs'));
};

const onCardClick = (evt) => {
  const cardInfo = evt.target.closest('.cruises-item');

  if (cardInfo) {
    cardInfo.classList.toggle('cruises-item--nojs');
  }
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
