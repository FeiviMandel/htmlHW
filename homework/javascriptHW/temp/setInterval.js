(function () {
    'use strict';


    // const bgColors = ['lightgreen', 'lightblue', 'blue', 'red'];
    let r = 0;
    let g = 0;
    let b = 0;
    
    const colors = ['blue', 'red', 'lightgreen', 'yellow'];
    // let i = 0;
    let j = 0;

    function changeTheBgColor() {
        r++;
        if (r === 255) {
            r = 0;
            g++;
            if (g === 255) {
                g = 0;
                b++;
                if (b === 255) {
                    b = 0;
                }
            }
        }
        // const bgColors = [r, g, b];
        document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    }

    function changeTheColor() {
        document.getElementById('text').style.color = colors[j++];
        if (j === colors.length) {
            j = 0;
        }
    }

    //setInterval(changeTheBgColor, 1000);

    const startButton = document.getElementById('start');
    const text = document.getElementById('text');


    let intervalId1;
    let intervalId2;

    startButton.addEventListener('click', () => {
        if (intervalId1) {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
            intervalId1 = null;
            intervalId2 = null;
            startButton.innerHTML = 'Start';
            text.innerHTML = 'To see the background color change, please click the Start button.';
        } else {
            intervalId1 = setInterval(changeTheBgColor, 1000);
            intervalId2 = setInterval(changeTheColor, 1000);
            startButton.innerHTML = 'Stop';
            text.innerHTML = 'To stop the background color from changing, please click the Stop button.';
        }
    });

})();