(function () {
    'use strict';

    function get(id) {
        return document.getElementById(id);
    }

    function setCss(element, property, value) {
        element.style[property] = value;
    }

    const bgColors = ['lightgreen', 'lightblue', 'blue', 'red'];
    const colors = ['blue', 'red', 'lightgreen', 'yellow'];
    let i = 0;
    let j = 0;

    function changeTheColors() {
        let newBgColor = bgColors[i];
        let newColor = colors[j];        
        const colorsTable = get('colors');
        const newRow = colorsTable.insertRow();  
        newRow.addEventListener('click', function () {
            setCss(document.body.style.backgroundColor = newBgColor);
            setCss(document.getElementById('text').style.color = newColor);
        }); 
        const backgroundColor = newRow.insertCell();
        const color = newRow.insertCell();
        const date = newRow.insertCell();
        color.innerHTML = newColor;
        backgroundColor.innerHTML = newBgColor;
        const time = new Date().toLocaleString();
        date.innerHTML = time;
        i++;
        if (i === bgColors.length) {
            i = 0;
        }
        j++;
        if (j === colors.length) {
            j = 0;
        } 
        setCss(get('text'), 'color', newColor);
        setCss(document.body.style.backgroundColor = newBgColor);
        
    }

    //setInterval(changeTheColors, 1000);

    const startButton = get('start');
    const text = get('text');


    let intervalId;
    
    startButton.addEventListener('click', () => {
        if (intervalId) {
            clearInterval(intervalId);            
            intervalId = null;            
            startButton.innerHTML = 'Start';
            text.innerHTML = 'To see the background color change, please click the Start button.';
        } else {
            intervalId = setInterval(changeTheColors, 1000);
            startButton.innerHTML = 'Stop';
            text.innerHTML = 'To stop the background color from changing, please click the Stop button.';
        }
    });
})();