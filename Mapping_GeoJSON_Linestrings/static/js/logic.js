// Add console.log to check to see if our code is working.
console.log("working");


// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'navigation-preview-day-v4',
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'navigation-preview-night-v4',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);
// Create a base layer that holds both maps.
let baseMaps = {
  "Day Nav": light,
  "Night Nav": dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0,-80.0],
  zoom: 2,
  layers: [dark]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/ambermiddendorf/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/ambermiddendorf/Mapping_Earthquakes/main/majorAirports.json"

//  Add a marker to the map for Los Angeles, California.
// let marker = L.circleMarker([34.0522, -118.2437],{
//     radius:300,
//     color:'black',
//     fillColor: '#ffffa1',
//     fillOpacity:0.5
// }).addTo(map);

// An array containing each city's location, state, and population.
// let cities = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];

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

// Coordinates for each point to be used in the polyline.
// let line = [
//   [37.6213, -122.3790],
//   [30.1975, -97.6664],
//   [44.8848, -93.2223],
//   [43.6777, -79.6248],
//   [40.6413, -73.7781]
// ];

// Create a polyline using the line coordinates and make the line yellow.
// L.polyline(line, {
//   color: "blue",
//   dashArray: '20, 20',
//   weight: 4
// }).addTo(map);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
  // L.geoJSON(sanFranAirport, {
// We turn each feature into a marker on the map.
  // onEachFeature: function(feature, layer) {
  //   console.log(layer)
  //   layer.bindPopup("<h3> Airport code: "+feature.properties.faa +"</h3> <hr> <h3> Airport name: " +feature.properties.name + "</h3>");
  // }
  // }).addTo(map);

// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//   console.log(data);
// // Creating a GeoJSON layer with the retrieved data.
// L.geoJSON(data, {
//   // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer)
//       layer.bindPopup("<h3> Airport code: "+feature.properties.faa +"</h3> <hr> <h3> Airport name: " +feature.properties.name + "</h3>");
//     }
//     }).addTo(map);})

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data,{
    style: myStyle
})
  .addTo(map);
});

// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}