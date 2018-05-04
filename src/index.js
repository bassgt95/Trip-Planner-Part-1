const buildMarker = require('./marker')
const token = require('./token');
const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = token;

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 7, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const poughkeepsie = buildMarker('restaurants', [-73.9210, 41.7004]);
const fullstack = buildMarker('activities', [-74.009, 40.705]);

fullstack.addTo(map);
poughkeepsie.addTo(map);