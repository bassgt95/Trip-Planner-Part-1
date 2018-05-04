const mapboxgl= require("mapbox-gl");

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
    const marker = document.createElement("div");
    marker.style.width = "32px";
    marker.style.height = "39px";
    marker.style.backgroundImage = `url(${iconURLs[type]})`;
    return new mapboxgl.Marker(marker).setLngLat(coords);
}

module.exports = buildMarker;