(function () {
    'use strict';

    const theButton1 = $("#theButton1");
    const theButton2 = $("#theButton2");
    const theButton3 = $("#theButton3");
    const disable = $("#disable");

    disable.on('click', () => {
        if (theButton1.prop('disabled')) {
            theButton1.prop('disabled', false);
            theButton2.prop('disabled', false);
            theButton3.prop('disabled', false);
            disable.html('Disable All Buttons');
        }
        else {
            theButton1.prop('disabled', true);
            theButton2.prop('disabled', true);
            theButton3.prop('disabled', true);
            disable.html('Enable All Buttons');
        }

    });
})();