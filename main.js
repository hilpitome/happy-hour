var mapCanvas;
google.maps.event.addDomListener(window, 'load', initMap);
function initMap() {
  mapCanvas = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 35.1393974, lng: -90.0085645},
            zoom: 12

  });
  var markerOptions = {
      position: new google.maps.LatLng(35.1393974, -90.0085645)
    };
  var marker = new google.maps.Marker(markerOptions);
  	marker.setMap(mapCanvas);

}
