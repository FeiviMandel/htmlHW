// SL - nice!
window.app = window.app || {};
window.app.counters = (function () {
    'use strict';

    let numberOfCounters = 0;
    return {
        getNumberOfCounters: function () {
            return numberOfCounters;
        },
        createCounter: function () {
            let counter = 0;

            numberOfCounters++;

            return {
                incrementCounter: function () {
                    return counter++;
                },
                getCurrentCount: function () {
                    return counter;
                }
            };
        }
    };
}());