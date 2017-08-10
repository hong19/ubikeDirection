import React, {Component} from 'react';

import waypoint from '../../../waypoints';


class GoogleMap extends Component {
    componentDidMount() {
        waypoint.initMap();
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <div id="map"/>
                </div>
            </div>
        );
    }
}

export default GoogleMap;

