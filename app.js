import $ from "jquery";
import React from 'react';
import ReactDOM from 'react-dom';

import {initialAutocomplete} from './addressAutoComplete';

import {initialStartDirect} from "./direction";

import waypoint from './waypoints';

$(document).ready(function () {
    initialAutocomplete();
    initialStartDirect();
    waypoint.initMap();
    ReactDOM.render(<h1>hello world</h1>, document.getElementById('root'));
});

