var app = app || {};

// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete, autocompleteDestination;

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});

    autocompleteDestination = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete-destination')),
        {types: ['geocode']});

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', getOriginLocation);
    autocompleteDestination.addListener('place_changed', getDestinationLocation);

}

function getOriginLocation() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();


    if (place) {
        console.log('autocomplete');
        app.origin = app.origin || {};
        app.origin.lat = place.geometry.location.lat();
        app.origin.lng = place.geometry.location.lng();
        console.log('lat ' + app.origin.lat);
        console.log('lng ' + app.origin.lng);
    }
}

function getDestinationLocation() {
    // Get the place details from the autocomplete object.
    var place = autocompleteDestination.getPlace();

    if (place) {
        console.log('autocomplete destination');
        app.destination = app.destination || {};
        app.destination.lat = place.geometry.location.lat();
        app.destination.lng = place.geometry.location.lng();
        console.log('lat ' + app.destination.lat);
        console.log('lng ' + app.destination.lng);
    }
}



// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}

export function initialAutocomplete() {
    initAutocomplete();
    $("#autocomplete").focus(geolocate());
}
