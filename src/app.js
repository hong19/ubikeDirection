import $ from "jquery";
import React from 'react';
import ReactDOM from 'react-dom';

import waypoint from '../waypoints';


import Layout from 'Layout';

$(document).ready(function () {
    waypoint.initMap();
    ReactDOM.render(<Layout/>, document.getElementById('root'));
});
