// My API Key... MjQxNTIw
// Code will go below this line...
    var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -22.916099, lng: -42.819192},
          zoom: 10
        });
      }

      // This example adds a marker to indicate the position of Maricá in Rio de Janeiro,
      // Brazil.
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: -22.916099, lng: -42.819192}
        });

        var image = 'https://static.getjar.com/icon-50x50/2e/943456_thm.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: -22.916, lng: -42.819},
          map: map,
          icon: image
        });
      }
