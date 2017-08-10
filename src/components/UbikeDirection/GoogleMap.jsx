import React, {Component} from 'react';

import location from './locationData';
import ubikeStops from "./importUbikeStops";


class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.googleMap = {};
    }

    initMap() {
        let directionsService = new google.maps.DirectionsService;
        let directionsDisplay1 = new google.maps.DirectionsRenderer;
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: {lat: 25.0549876, lng: 121.4039194}
        });
        directionsDisplay1.setMap(map);


        this.googleMap = {
            directionsService: directionsService,
            directionsDisplay1: directionsDisplay1
        };
    }

    calculateAndDisplayRoute(directionsService, directionsDisplay) {
        console.log('calculate route');

        let waypoints = [];
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
                let route = response.routes[0];

                let bikeFootSpeedRatio = 2.5;
                let a2bDuration = route.legs[0].duration.value / 60;
                let b2cDuration = route.legs[1].duration.value / 60 / bikeFootSpeedRatio;
                let c2dDuration = route.legs[2].duration.value / 60;

                let totalDuration = a2bDuration + b2cDuration + c2dDuration;

                $("#a2b-duration").html(a2bDuration.toFixed(1));
                $("#b2c-duration").html(b2cDuration.toFixed(1));
                $("#c2d-duration").html(c2dDuration.toFixed(1));

                $("#total-duration").html(totalDuration.toFixed(1));
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }


    initialStartDirect() {
        ubikeStops.importUbikeStops();
        let that = this;
        $("#start-direct").click(function() {
            console.log('start direct');
            if(location.origin) {
                console.log(location.origin);
                location.originUbikeStop = that.findClosestStop(location.origin, ubikeStops.ubikeStops);
            }

            if(location.destination) {
                console.log(location.destination);
                location.destinationUbikeStop = that.findClosestStop(location.destination, ubikeStops.ubikeStops);
            }


            console.log('start calculate route');
            that.calculateAndDisplayRoute(that.googleMap.directionsService, that.googleMap.directionsDisplay1);
            //calculateAndDisplayRoute(location.googleMap.directionsService, location.googleMap.directionsDisplay2);
            //calculateAndDisplayRoute(location.googleMap.directionsService, location.googleMap.directionsDisplay3);
        });
    }


    findClosestStop(target, ubikeStops) {
        let minDistance = 100000.0;
        let closestStopIndex = 0;
        let distance = 100000.0;


        for (let stopIndex in ubikeStops) {
            if (ubikeStops.hasOwnProperty(stopIndex)) {
                let ubikeStopLat = parseFloat(ubikeStops[stopIndex].lat);
                let ubikeStopLng = parseFloat(ubikeStops[stopIndex].lng);
                distance = Math.pow(target.lat - ubikeStopLat, 2) + Math.pow(target.lng - ubikeStopLng, 2);
                if (distance < minDistance) {
                    minDistance = distance;
                    closestStopIndex = stopIndex;
                }

            }
        }


        console.log('closest stop:');
        console.log(ubikeStops[closestStopIndex]);
        console.log('min distance:' + minDistance);

        return {
            lat: parseFloat(ubikeStops[closestStopIndex].lat),
            lng: parseFloat(ubikeStops[closestStopIndex].lng)
        };
    }

    componentDidMount() {
        this.initMap();
        this.initialStartDirect();
    }

    render() {
        return (
            <div id="map"/>
        );
    }
}

export default GoogleMap;

