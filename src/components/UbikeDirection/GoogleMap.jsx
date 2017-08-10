import React, {Component} from 'react';

import waypoint from '../../../waypoints';


class GoogleMap extends Component {
    componentDidMount() {
        waypoint.initMap();
    }

    render() {
        return (
            <div id="map"/>
        );
    }
}

export default GoogleMap;

