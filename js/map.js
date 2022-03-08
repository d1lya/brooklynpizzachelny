;(function() {
    if (typeof ymaps === 'undefiend') {
        return;
    }
    ymaps.ready(function () {
        var myMap = new ymaps.Map('ymap', {
                center: [55.741338, 52.414909],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'г. Набережные Челны, проспект Хасана Туфана, 8А'
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'img/penis2.png',
                iconImageSize: [40, 50],
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects
            .add(myPlacemark)
    });

})();