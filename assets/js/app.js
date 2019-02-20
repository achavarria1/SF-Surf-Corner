var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

var oceanBeachcoords = [-122.51112, 37.773975];
var pacificaBeachcoords = [-122.509186, 37.59548];

mapboxgl.accessToken = 'pk.eyJ1IjoiYWNoYXZhcnJpYSIsImEiOiJjanM0d3l0b3UwOW8xM3pvemxvbG94ODBhIn0.5JOkQ5m0D_wbjugww-2sCQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: oceanBeachcoords,
  zoom: 10
});

var features = [{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": oceanBeachcoords
  },
  "properties": {
    "title": "San Francisco",
    "icon": "monument"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": pacificaBeachcoords
  },
  "properties": {
    "title": "Daly City",
    "icon": "harbor"
  }
}]

map.on('load', function () {

  map.addLayer({
    "id": "points",
    "type": "symbol",
    "source": {
      "type": "geojson",
      "data": {
        "type": "FeatureCollection",
        "features": features
      }
    },
    "layout": {
      "icon-image": "{icon}-15",
      "text-field": "{title}",
      "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      "text-offset": [0, 0.6],
      "text-anchor": "top"
    }
  });
});

// map.on('load', function () {
//   map.addSource('single-point', {
//     "type": "geojson",
//     "data": {
//       "type": "Point",
//       "coordinates": oceanBeachcoords
//     }
//   });

//   map.addLayer({
//     "id": "point",
//     "source": "single-point",
//     "type": "circle",
//     "paint": {
//       "circle-radius": 10,
//       "circle-color": "red"
//     }
//   });


// map.on('load', function () {
//   map.addSource('single-point', {
//     "type": "geojson",
//     "data": {
//       "type": "Point",
//       "coordinates": pacificaBeachcoords
//     }
//   });

//   map.addLayer({
//     "id": "point",
//     "source": "single-point",
//     "type": "circle",
//     "paint": {
//       "circle-radius": 10,
//       "circle-color": "green"
//     }
//   });
// });
//});


$('button').on('click', function(){
    console.log('hello');
    $.ajax({
      url: "http://localhost:3000/data",
      method: 'GET'
    })
    .then(function(response){
      console.log(response);

    });

})

