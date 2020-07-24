window.app = window.app || {};
window.app.counter = (function () {
    'use strict';

    let countr = 0;

    return {
        incrementCounter: function () {
            return countr++;
        },
        getCurrentCount: function () {
            return countr;
        }
    };
}());