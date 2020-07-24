(function () {
    'use strict';

    function ourMap(theArray, callback) {
        const result = [];

        theArray.forEach(elem => {
            result.push(callback(elem));
        });

        return result;
    }

    const numbers = [2, 4, 6];
    const doubler = amount => amount * 2;
    const doubled = ourMap(numbers, doubler);
    
    console.log('original array' ,numbers);
    console.log('new array' ,doubled);  

})();