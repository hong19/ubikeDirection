var app = app || {};

$("#start-direct").click(function() {
    console.log('start direct');
    if(app.origin) {
        console.log(app.origin);
        //console.log(app.ubikeStops);
        app.originUbikeStop = findClosestStop(app.origin, app.ubikeStops);
    }

    if(app.destination) {
        console.log(app.destination);
        app.destinationUbikeStop = findClosestStop(app.destination, app.ubikeStops);
    }
});

function findClosestStop(target, ubikeStops) {
    var minDistance = 100000.0;
    var closestStopIndex = 0;
    var distance = 100000.0;


    for (var stopIndex in ubikeStops) {
        if (ubikeStops.hasOwnProperty(stopIndex)) {
            var ubikeStopLat = ubikeStops[stopIndex].lat + 0.0;
            var ubikeStopLng = ubikeStops[stopIndex].lng + 0.0;
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
        lat: ubikeStops[closestStopIndex].lat,
        lng: ubikeStops[closestStopIndex].lng
    };
}