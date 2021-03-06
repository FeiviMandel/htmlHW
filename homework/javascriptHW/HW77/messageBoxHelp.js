window.pcs = window.pcs || {};
window.pcs.messageBoxHelp = (function () {
    'use strict';

    const offset = 30;
    let leftOffset = -150;
    let topOffset = -75;
    const width = 300;
    const height = 350;
    let nextZindex = 1;

    const modalOverlay = document.createElement('div');
    modalOverlay.style.position = 'fixed';
    modalOverlay.style.width = '100%';
    modalOverlay.style.height = '100%';
    modalOverlay.style.left = '0';
    modalOverlay.style.top = '0';
    modalOverlay.style.backgroundColor = 'lightgray';
    modalOverlay.style.opacity = '.5';
    modalOverlay.style.display = 'none';
    document.body.appendChild(modalOverlay);

    function show(msg, modal = false, buttonArray = ['ok']) {
        const messageBox = document.createElement('div');
        const span = document.createElement('span');
        span.innerHTML = msg;
        messageBox.appendChild(span);

        const buttons = document.createElement('div');
        const help = document.getElementById('help');
        buttonArray.forEach(element => {
            const button = document.createElement('button');
            button.innerHTML = element;
            buttons.appendChild(button);
            button.addEventListener('click', () => {

                help.disabled = false;
                document.body.removeChild(messageBox);
                modalOverlay.style.display = 'none';
            });
        });



        messageBox.appendChild(buttons);
        document.body.appendChild(messageBox);



        messageBox.addEventListener('click', () => {
            messageBox.style.zIndex = nextZindex++;
        });

        if (modal) {
            modalOverlay.style.display = 'block';
            modalOverlay.style.zIndex = nextZindex;
        }

        messageBox.className = 'messageBox';

        // probably should move this all to css file....
        messageBox.style.backgroundColor = 'lightgray';
        messageBox.style.padding = '2em';
        // messageBox.style.paddingBottom = '38px';
        messageBox.style.boxSizing = 'border-box';
        messageBox.style.width = `${width}px`;
        messageBox.style.height = `${height}px`;
        messageBox.style.textAlign = 'center';
        messageBox.style.position = 'absolute';
        messageBox.style.top = '10%';
        messageBox.style.left = '25%';
        messageBox.style.marginLeft = `${leftOffset}px`;
        messageBox.style.marginTop = `${topOffset}px`;
        messageBox.style.border = '1px solid black';
        messageBox.style.zIndex = nextZindex++;

        span.style.overflow = 'auto';
        span.style.height = '100%';
        span.style.display = 'inline-block';

        buttons.style.position = 'absolute';
        buttons.style.bottom = '8px';
        buttons.style.left = '0';
        buttons.style.marginTop = '2em';
        buttons.style.marginBottom = '1em';
        buttons.style.width = '100%';
        buttons.style.textAlign = 'center';

        leftOffset += offset;
        topOffset += offset;

        if (parseFloat(getComputedStyle(messageBox).left) + leftOffset + width > window.innerWidth) {
            leftOffset -= window.innerWidth - width;
        }

        if (parseFloat(getComputedStyle(messageBox).top) + topOffset + height > window.innerHeight) {
            topOffset -= window.innerHeight - height;
        }
    }

    return {
        show: show
    };
}());