import React, {Component} from 'react';
import {initialAutocomplete} from '../../../addressAutoComplete';
import {initialStartDirect} from "../../../direction";


class InputAddressForm extends Component {

    componentDidMount() {
       initialAutocomplete();
       initialStartDirect();
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