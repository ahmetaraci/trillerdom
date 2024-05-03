var map = L.map("map").setView([39.925533, 32.866287], 6);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var map = L.map("map").setView([39.525533, 35.5], 7);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

fetch("tr.json")
  .then((response) => response.json())
  .then((data) => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        if (feature.properties) {
          var popupContent =
            "<p><b>Şehir:</b> " +
            feature.properties.name +
            "</p>" +
            "<p><b>3˚ DOM:</b> " +
            feature.properties.dom_3_derece +
            "</p>" +
            "<p><b>6˚ DOM:</b> " +
            feature.properties.dom_6_derece +
            "</p>";
          layer.bindPopup(popupContent);
        }
      },
    }).addTo(map);
  });
