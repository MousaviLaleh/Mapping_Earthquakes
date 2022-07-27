
// this file codes are using to create the maps


// Add console.log to check to see if our code is working.
// console.log("working");


// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([43.0540366, -79.1580741], 11);


// Create the map object with a center and zoom level ( 13.2.4 ).
// let map = L.map("mapid", {
//     center:
//         // [43.0540366, -79.1580741],
//         // [36.8136411, 49.4066332],
//         [30.267153, -97.7430608],

//     zoom: 12
// });

// We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/satellite-v9",
//     accessToken: API_KEY
// });

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

//  another way
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/outdoors-v11",
//     accessToken: API_KEY
// }).addTo(map);


// Create a marker

// Pass in some initial options, and 
// then add it to the map using the .addTo method,
// and make a popup with .bindPopup
// var marker = L.marker([30.267153, -97.7430608], {
//     draggable: false,
//     title: "My First Marker",
// }).addTo(map).bindPopup("I'm the simple marker");



// create circle markers
// var circle = L.circle([30.267153, -97.7430608], {
//     color: 'red',
//     fillcolor: 'red',
//     fillopacity: 0.5,
//     radius: 200
// }).addTo(map).bindPopup("I'm the circle marker");





//  ____  map multiple points

let map = L.map("mapid", {
    center: [37.09, -95.71],
    zoom: 5
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/dark-v10",
    accessToken: API_KEY
}).addTo(map);


// An array of cities ( cities.js )
let cityData = cities;


// loop through the array

// 1. create Marker for each city
// cityData.forEach(function(city) {
//     L.marker(city.location)
//     // show the city, state and population with a thousands separator
//     .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });


// 2. create Circle for each city,
// size of circle based on city's population
cityData.forEach(function(city) {
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: 'orange'
    })
    .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .addTo(map);
});




