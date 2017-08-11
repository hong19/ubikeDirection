import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import 'bootstrap'; //bootstrap js
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap css

import Layout from 'Layout';

$(document).ready(function () {
    ReactDOM.render(<Layout/>, document.getElementById('root'));
});
