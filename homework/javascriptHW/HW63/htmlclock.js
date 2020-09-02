window.pcs = window.pcs || {};

window.pcs.clock = (function () {
    'use strict';
    
    const clock = document.createElement('div');    
    document.body.appendChild(clock);

    function htmlClock() {
        let d = new Date();
        clock.innerHTML = d.toLocaleTimeString();        
    }

    return function (){
        setInterval(htmlClock, 1000);
    };

}());