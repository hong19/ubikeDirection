import $ from "jquery";
import React from 'react';
import ReactDOM from 'react-dom';

import {initialAutocomplete} from '../addressAutoComplete';

import {initialStartDirect} from "../direction";

import waypoint from '../waypoints';


import Layout from 'Layout';

$(document).ready(function () {
    initialAutocomplete();
    initialStartDirect();
    waypoint.initMap();
    ReactDOM.render(<Layout/>, document.getElementById('root'));
});
