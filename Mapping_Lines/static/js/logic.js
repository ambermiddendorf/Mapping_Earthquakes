// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6213, -98], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'light-v10',
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.circleMarker([34.0522, -118.2437],{
//     radius:300,
//     color:'black',
//     fillColor: '#ffffa1',
//     fillOpacity:0.5
// }).addTo(map);

// An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];

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
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [44.8848, -93.2223],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "blue",
  dashArray: '20, 20',
  weight: 4
}).addTo(map);