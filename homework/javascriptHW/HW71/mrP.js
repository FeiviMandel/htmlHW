(function () {
    'use strict';

    let dragging;
    let offset;
    let storage = [];
    // let y = 0;
    let z = 0;
    const hat = $('#hatB');
    const glasses = $('#glassesB');
    const mouth = $('#mouthB');
    const eyes = $('#eyesB');
    const nose = $('#noseB');
    const ears = $('#earsB');
    const shoes = $('#shoesB');
    const body = $('#bodyB');
    
    hat.click(() => {
        $('#hat').css("visibility", "visible");
    });

    glasses.click(() => {
        $('#glasses').css("visibility", "visible");
    });
    mouth.click(() => {
        $('#mouth').css("visibility", "visible");
    });
    eyes.click(() => {
        $('#eyes').css("visibility", "visible");
    });
    nose.click(() => {
        $('#nose').css("visibility", "visible");
    });
    ears.click(() => {
        $('#lEar').css("visibility", "visible");
        $('#rEar').css("visibility", "visible");
    });
    shoes.click(() => {
        $('#shoes').css("visibility", "visible");
    });
    body.click(() => {
        $('#body').css("visibility", "visible");
    });

    $(document).on('mousedown', '.parts', e => {
        // console.log('mousedown', e);
        offset = { x: e.offsetX, y: e.offsetY };
        dragging = $(e.target);
        dragging.css('zIndex', z++);
    });

    $(document).mousemove(e => {
        if(dragging) {
            e.preventDefault();
            console.log('mousemove', e);
            dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
        }
    }).mouseup(e => {
        if(dragging) {
            console.log('mouseup', e);
            dragging = null;
        }        
        $('.parts').each((i, parts) => {
            storage.push({
                id: $(parts).attr("id"),
                top: $(parts).css("top"),
                left: $(parts).css("left"),
                zIndex: $(parts).css("z-index")
            });
            localStorage.storage = JSON.stringify(storage);
        });
    });

    // $('.sidebar').each((i, parts) =   {
    //     $(parts).css("top",y+=105);
    //     $(parts).css("left",30);
    // });

    if (localStorage.storage) {
        storage = JSON.parse(localStorage.storage);
        storage.forEach(part => {
            $(`#${part.id}`).css('top', part.top);
        $(`#${part.id}`).css('left', part.left);
        $(`#${part.id}`).css('z-index', part.zIndex);
    });
}
}());