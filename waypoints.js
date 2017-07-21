var app = app || {};

function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);

    var directionsDisplay2 = new google.maps.DirectionsRenderer;
    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 6,
        center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay2.setMap(map2);


    document.getElementById('submit').addEventListener('click', function() {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    });
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    console.log('calculate route');

    console.log("app.origin " + app.origin);
    console.log("app.destination " + app.destination);
    directionsService.route({
        origin: app.origin,
        destination: app.destination,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}
initMap();