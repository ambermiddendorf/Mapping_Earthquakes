// Add console.log to check to see if our code is working.
console.log("working");


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'streets-v11',
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'satellite-streets-v11',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);
// Create a base layer that holds both maps.
let baseMaps = {
  'Street': streets,
  'Satellite Streets': satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

//Earthquake Data
let earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// // Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//     L.circle(city.location, {
//         radius: city.population/1000,
//         fillColor: 'orange',
//         color: 'orange',
//         weight: 4
//     })
//     .bindPopup("<h2>"+city.city+", " + city.state + "</h2> <hr> <h3>Population "+ city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });



// Grabbing our GeoJSON data.
d3.json(earthquakes).then(function(data) {
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});
  // {
  // // We turn each feature into a marker on the map.
  //   onEachFeature: function(feature, layer) {
  //     console.log(layer)
  //     layer.bindPopup("<h3> Airport code: "+feature.properties.faa +"</h3> <hr> <h3> Airport name: " +feature.properties.name + "</h3>");
  //   }
  //   }).addTo(map);})