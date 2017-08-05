import $ from "jquery";

import {initialAutocomplete} from './addressAutoComplete';

import {initialStartDirect} from "./direction";

import waypoint from './waypoints';

$(document).ready(function () {
    initialAutocomplete();
    initialStartDirect();
    waypoint.initMap();
});
