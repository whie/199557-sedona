ymaps.ready(init);
  var myMap,
      myPlacemark;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [34.86607220, -111.76359320],
      zoom: 17,
      type: 'yandex#hybrid'
    });
    myPlacemark = new ymaps.Placemark([34.86607220, -111.76359320], { hintContent: 'Sedona', balloonContent: 'Welcome to the gorgeous Sedona'}, {
            iconColor: '#f95d51'
        });
    myMap.geoObjects.add(myPlacemark);
  }
