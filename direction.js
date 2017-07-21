var app = app || {};

$("#start-direct").click(function() {
    console.log('start direct');
    if(app.origin) {
        console.log(app.origin);
        console.log(app.ubikeStops);
    }
});