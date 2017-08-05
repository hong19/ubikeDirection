import $ from 'jquery';
import location from './locationData';

var module = {
    googleMap: {},

    initMap: function initMap() {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay1 = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 25.0549876, lng: 121.4039194}
        });
        directionsDisplay1.setMap(map);


        this.googleMap = {
            directionsService: directionsService,
            directionsDisplay1: directionsDisplay1
        };
    },

    calculateAndDisplayRoute: function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        console.log('calculate route');

        var waypoints = [];
        waypoints.push({
            location: location.originUbikeStop,
            stopover: true
        })

        waypoints.push({
            location: location.destinationUbikeStop,
            stopover: true
        })

        directionsService.route({
            origin: location.origin,
            destination: location.destination,
            waypoints: waypoints,
            travelMode: "WALKING"
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                console.log(response);
                var route = response.routes[0];

                var bikeFootSpeedRatio = 2.5;
                var a2bDuration = route.legs[0].duration.value / 60;
                var b2cDuration = route.legs[1].duration.value / 60 / bikeFootSpeedRatio;
                var c2dDuration = route.legs[2].duration.value / 60;

                var totalDuration = a2bDuration + b2cDuration + c2dDuration;

                $("#a2b-duration").html(a2bDuration.toFixed(1));
                $("#b2c-duration").html(b2cDuration.toFixed(1));
                $("#c2d-duration").html(c2dDuration.toFixed(1));

                $("#total-duration").html(totalDuration.toFixed(1));
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    },

}

export default module;