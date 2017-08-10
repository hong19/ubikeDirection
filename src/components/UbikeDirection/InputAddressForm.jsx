import React, {Component} from 'react';
import location from '../../../locationData';

class InputAddressForm extends Component {
    constructor(props) {
        super(props);

        this.autocomplete = {};
        this.autocompleteDestination = {};
    }

    initAutocomplete() {
        // Create the autocomplete object, restricting the search to geographical
        // location types.
        this.autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
            {types: ['geocode']});

        this.autocompleteDestination = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */(document.getElementById('autocomplete-destination')),
            {types: ['geocode']});

        // When the user selects an address from the dropdown, populate the address
        // fields in the form.
        this.autocomplete.addListener('place_changed', this.getOriginLocation.bind(this));
        this.autocompleteDestination.addListener('place_changed', this.getDestinationLocation.bind(this));

    }

    getOriginLocation() {
        // Get the place details from the autocomplete object.
        let place = this.autocomplete.getPlace();


        if (place) {
            location.origin.lat = place.geometry.location.lat();
            location.origin.lng = place.geometry.location.lng();
            console.log('lat ' + location.origin.lat);
            console.log('lng ' + location.origin.lng);
        }
    }

    getDestinationLocation() {
        // Get the place details from the autocomplete object.
        let place = this.autocompleteDestination.getPlace();

        if (place) {
            location.destination.lat = place.geometry.location.lat();
            location.destination.lng = place.geometry.location.lng();
            console.log('lat ' + location.destination.lat);
            console.log('lng ' + location.destination.lng);
        }
    }



// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
    geolocate() {
        let that = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let geolocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                let circle = new google.maps.Circle({
                    center: geolocation,
                    radius: position.coords.accuracy
                });
                that.autocomplete.setBounds(circle.getBounds());
            });
        }
    }

    initialAutocomplete() {
        this.initAutocomplete();
        $("#autocomplete").focus(this.geolocate.bind(this));
    }



    componentDidMount() {
       this.initialAutocomplete();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="form-group">
                        <label className="form-icon"><i className="fa fa-dot-circle-o" aria-hidden="true"/></label>
                        <input id="autocomplete" placeholder="Origin Address"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <label className="form-icon"><i className="fa fa-map-marker" aria-hidden="true"/></label>
                        <input id="autocomplete-destination" placeholder="Destination Address"/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <button id="start-direct"><i className="fa fa-location-arrow" aria-hidden="true"/></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputAddressForm;