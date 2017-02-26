var map = L.map('map-container').setView([39.833333, -98.583333], 5);
var sidebar = document.getElementById('sidebar');



L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// EXPECTING LAT LONG ARRAY
function drawRoute(start, end) {
    L.Routing.control({
        waypoints: [
            L.latLng(start[0], start[1]),
            L.latLng(end[0], end[1])
        ]
    }).addTo(map);
}


var purdue = [40.423313, -86.920529];
var vanderbilt = [36.142956, -86.805800];