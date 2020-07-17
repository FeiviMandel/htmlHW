
window.myApp = window.myApp || {};

window.myApp.utils = (function (utils) {
    'use strict';   

  
    utils.stringCaseInsensitiveEquals = function (name, name2) {
        return name.toLowerCase() === name2.toLowerCase();
    };
    //function (dayName) {
    // should use localeCompare
    //return days.findIndex(function (day) {
    //return !day.localeCompare(dayName, 'en', { sensitivity: 'accent' }); // language, options
    //return day.toLowerCase() === dayName.toLowerCase();
    //}) + 1;
    return utils;

}(window.myApp.utils || {}));



