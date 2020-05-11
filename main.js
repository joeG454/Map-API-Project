var mapModules = (function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoianBnOTYiLCJhIjoiY2thMXMwNnA4MDQ1ejNubjBuaG5qMmtvaiJ9.AmCUkdIpvj2wAv34RmizpA';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-97.38, 42.87774],
        zoom: 3
    });
})();
