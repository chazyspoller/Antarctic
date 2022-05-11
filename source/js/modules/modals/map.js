ymaps.ready(init);

function init() {
  let myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 15.5,
    controls: [],
  }, {
    searchControlProvider: 'yandex#search',
  });
  let myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'ул. Большая Конюшенная, 19/8',
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: '../img/svg/icon-map.svg',
    // Размеры метки.
    iconImageSize: [20, 24],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -40],
  });

  myMap.geoObjects.add(myPlacemark);
}
