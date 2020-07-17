
window.myApp = window.myApp || {};

window.myApp.utils = (function (utils) {
    'use strict';

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabbos'];

    utils.getDayName = function (index) {
        return days[index - 1];
    };

    utils.getDayNumber = function (name) {
        return days.findIndex(elem => elem.toLowerCase() === name.toLowerCase()) + 1;
    };

    return utils;
   
}(window.myApp.utils || {}));



