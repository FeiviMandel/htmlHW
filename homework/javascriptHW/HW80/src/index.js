
// (function () {
'use strict';
import './css/index.css';
import car from './images/car.jpg';
import $ from 'jquery';

const theButton1 = $("#theButton1");
const theButton2 = $("#theButton2");
const theButton3 = $("#theButton3");
const theButton4 = $("#theButton4");
const disable = $("#disable");

disable.on('click', () => {
    if (theButton1.prop('disabled')) {
        theButton1.prop('disabled', false);
        theButton2.prop('disabled', false);
        theButton3.prop('disabled', false);
        theButton4.prop('disabled', false);
        disable.html('Disable All Buttons');
    }
    else {
        theButton1.prop('disabled', true);
        theButton2.prop('disabled', true);
        theButton3.prop('disabled', true);
        theButton4.prop('disabled', true);
        disable.html('Enable All Buttons');
    }
});
theButton1.on('click', () => {
    const img = new Image();
    img.src = car;
    $(document.body).append(img);
});
// })();