import $ from 'jquery';

import location from './locationData';
import ubikeStops from "./importUbikeStops";


function findClosestStop(target, ubikeStops) {
    var minDistance = 100000.0;
    var closestStopIndex = 0;
    var distance = 100000.0;


    for (var stopIndex in ubikeStops) {
        if (ubikeStops.hasOwnProperty(stopIndex)) {
            var ubikeStopLat = parseFloat(ubikeStops[stopIndex].lat);
            var ubikeStopLng = parseFloat(ubikeStops[stopIndex].lng);
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

export function initialStartDirect() {
    ubikeStops.importUbikeStops();

    $("#start-direct").click(function() {
        console.log('start direct');
        if(location.origin) {
            console.log(location.origin);
            location.originUbikeStop = findClosestStop(location.origin, ubikeStops.ubikeStops);
        }

        if(location.destination) {
            console.log(location.destination);
            location.destinationUbikeStop = findClosestStop(location.destination, ubikeStops.ubikeStops);
        }


        console.log('start calculate route');
        calculateAndDisplayRoute(location.googleMap.directionsService, location.googleMap.directionsDisplay1);
        //calculateAndDisplayRoute(location.googleMap.directionsService, location.googleMap.directionsDisplay2);
        //calculateAndDisplayRoute(location.googleMap.directionsService, location.googleMap.directionsDisplay3);
    });
}


