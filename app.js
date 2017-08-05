import $ from "jquery";

import {initialAutocomplete} from './addressAutoComplete';

import {initialStartDirect} from "./direction";

$(document).ready(function () {
    initialAutocomplete();
    initialStartDirect();
});
