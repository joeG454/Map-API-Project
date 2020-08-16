
    mapboxgl.accessToken = 'pk.eyJ1IjoianBnOTYiLCJhIjoiY2thMXMwNnA4MDQ1ejNubjBuaG5qMmtvaiJ9.AmCUkdIpvj2wAv34RmizpA';
    var bounds = [
        [-117.573704, 31.075958], // Southwest coordinates
        [ -106.2597870826721, 38.13454813815107] // Northeast coordinates
    ];
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-v9',
        zoom: 3.33,
        center: [-111.62109375, 34.288991865037524],
        maxBounds: bounds
    });
var mapModules = (function () {
    map.on('load', function() {
        var layers = map.getStyle().layers;

        map.addSource('az-cover', {
            'type': 'geojson',
            'data': 'src/trails/az-block.geojson'
        });
        map.addSource('around-the-peaks', {
            'type': 'geojson',
            'data': 'src/trails/around-the-peaks.geojson'
        });
        map.addSource('baja-100', {
            'type': 'geojson',
            'data': 'src/trails/baja-100.geojson'
        });
        map.addSource('locket-meadow', {
            'type': 'geojson',
            'data': 'src/trails/locket-meadow.geojson'
        });
        map.addSource('newham-loop', {
            'type': 'geojson',
            'data': 'src/trails/newham-loop.geojson'
        });
        map.addLayer(
            {
                'id': 'az-cover-layer',
                'type': 'fill',
                'source': 'az-cover',
                'layout': {},
                'paint': {
                    'fill-color': '#2a2a2b',
                    'fill-opacity': 1
                }
                // This is the important part of this example: the addLayer
                // method takes 2 arguments: the layer as an object, and a string
                // representing another layer's name. if the other layer
                // exists in the stylesheet already, the new layer will be positioned
                // right before that layer in the stack, making it possible to put
                // 'overlays' anywhere in the layer stack.
                // Insert the layer beneath the first symbol layer.
            }
        );
        map.addLayer(
            {
                'id': 'single-track-1',
                'type': 'line',
                'source': 'around-the-peaks',
                'layout': {
                    'visibility': 'visible'
                },
                'paint': {
                    'line-color': '#2196F3',
                    'line-width': 3,
                    'line-opacity': 1
                }
            }
        );
        map.addLayer(
            {
                'id': 'single-track-2',
                'type': 'line',
                'source': 'baja-100',
                'layout': {
                    'visibility': 'visible'
                },
                'paint': {
                    'line-color': '#2196F3',
                    'line-width': 3,
                    'line-opacity': 1
                }
            }
        );
        map.addLayer(
            {
                'id': 'single-track-3',
                'type': 'line',
                'source': 'locket-meadow',
                'layout': {
                    'visibility': 'visible'
                },
                'paint': {
                    'line-color': '#2196F3',
                    'line-width': 3,
                    'line-opacity': 1
                }
            }
        );
        map.addLayer(
            {
                'id': 'single-track-4',
                'type': 'line',
                'source': 'newham-loop',
                'layout': {
                    'visibility': 'visible'
                },
                'paint': {
                    'line-color': '#2196F3',
                    'line-width': 3,
                    'line-opacity': 1
                }
            }
        );
    });
})();

function hideLayerSource(x){
    console.log('hide ' + x);
    var layers = map.getStyle().layers;
    for(i = 0; i < layers.length; i++){
        var layerID = layers[i].id.toString();
        console.log('checking: ' + layerID)
        if(layerID.includes(x)){
            console.log("hide:" + layers[i].id);
            map.setLayoutProperty(layers[i].id, 'visibility', 'none');
        }
    }
}

function showLayerSource(x){
    console.log('show ' + x);
    var layers = map.getStyle().layers;
    for(i = 0; i < layers.length; i++){
        var layerID = layers[i].id.toString();
        console.log('checking: ' + layerID)
        if(layerID.includes(x)){
            map.setLayoutProperty(layers[i].id, 'visibility', 'visible');
        }
    }
}

//Test URLS:
//https://api.mapbox.com/styles/v1/jpg96/cka7memyx1nxg1irv6niopflc?access_token=pk.eyJ1IjoianBnOTYiLCJhIjoiY2thMW4wcnJzMDJndDNtcXdkeDljOWgyMiJ9.zwsWHDCIn80YeHaXoRvU6Q
//https://api.mapbox.com/v4/mapbox.satellite/page.html?access_token=pk.eyJ1IjoianBnOTYiLCJhIjoiY2thMXMwNnA4MDQ1ejNubjBuaG5qMmtvaiJ9.AmCUkdIpvj2wAv34RmizpA
//https://api.mapbox.com/v4/cka7memyx1nxg1irv6niopflc/page.html?access_token=pk.eyJ1IjoianBnOTYiLCJhIjoiY2thMW4wcnJzMDJndDNtcXdkeDljOWgyMiJ9.zwsWHDCIn80YeHaXoRvU6Q