var app = app || {};

function initMap() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay1 = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 25.0549876, lng: 121.4039194}
    });
    directionsDisplay1.setMap(map);

    var directionsDisplay2 = new google.maps.DirectionsRenderer;

    var map2 = new google.maps.Map(document.getElementById('map2'), {
        zoom: 12,
        center: {lat: 25.0549876, lng: 121.4039194}
    });
    directionsDisplay2.setMap(map2);


    var directionsDisplay3 = new google.maps.DirectionsRenderer;
    var map3 = new google.maps.Map(document.getElementById('map3'), {
        zoom: 12,
        center: {lat: 25.0549876, lng: 121.4039194}
    });
    directionsDisplay3.setMap(map3);


    app.googleMap = {
        directionsService: directionsService,
        directionsDisplay1: directionsDisplay1,
        directionsDisplay2: directionsDisplay2,
        directionsDisplay3: directionsDisplay3
    };
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    console.log('calculate route');

    var waypoints = [];
    waypoints.push({
        location: app.originUbikeStop,
        stopover: true
    })

    waypoints.push({
        location: app.destinationUbikeStop,
        stopover: true
    })

    directionsService.route({
        origin: app.origin,
        destination: app.destination,
        waypoints: waypoints,
        travelMode: "WALKING"
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