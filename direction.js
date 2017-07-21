var app = app || {};

$("#start-direct").click(function() {
    console.log('start direct');
    if(app.origin) {
        console.log(app.origin);
        //console.log(app.ubikeStops);
        findClosestStop(app.origin, app.ubikeStops);
    }
});

function findClosestStop(target, ubikeStops) {
    var minDistance = 1000.0;
    var closestStopIndex = 0;
    var distance = 1000.0;


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
}