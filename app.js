import $ from "jquery";

import {initialAutocomplete} from './addressAutoComplete';
import ubikeStops from "./importUbikeStops";

$(document).ready(function () {
    ubikeStops.importUbikeStops();
    initialAutocomplete();
});
