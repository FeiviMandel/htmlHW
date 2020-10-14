(function () {
    'use strict';

    const search = $('#search');
    const form = $('#form');
    const page = $('#page');
    const pics = $('#pics');
    const a = $('#a');
    const b = $('#b');
    const c = $('#c');
    const d = $('#d');
    const e = $('#e');
    const f = $('#f');
    const g = $('#g');
    const h = $('#h');
    const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg', 'images/img6.jpg', 'images/img7.jpg', 'images/img8.jpg', 'images/img9.jpg', 'images/img10.jpg', 'images/img11.jpg', 'images/img12.jpg', 'images/img13.jpg', 'images/img14.jpg', 'images/img15.jpg', 'images/img16.jpg', 'images/img17.jpg'];
    let i = 0;
    page.hide();
    function flashImages() {
        a.attr('src', images[i++]);
        if (i === images.length) {
            i = 0;
        }
        b.attr('src', images[i++]);
        if (i === images.length) {
            i = 0;
        }
        c.attr('src', images[i++]);
        if (i === images.length) {
            i = 0;
        }
        d.attr('src', images[i++]);
        if (i === images.length) {
            i = 0;
        }
        e.attr('src', images[i++]);
        if (i === images.length) {
            i = 0;
        }
        f.attr('src', images[i++]);
        if (i === images.length) {
            i = 0;
        }
        g.attr('src', images[i++]);
        if (i === images.length) {
            i = 0;
        }
        h.attr('src', images[i++]);
        if (i === images.length) {
            i = 0;
        }
    }
    setInterval(flashImages, 1500);    
    form.submit(event => {
        page.hide();
        event.preventDefault();
        pics.empty();
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${search.val()}&format=json&jsoncallback=?`)
            // $.getJSON('flickr.json')
            .then(pic => {
                pic.items.forEach(p => {
                    $(`<li>
                    <img src="${p.media.m} || ${'trees.jpg'} ">
                    <div>${p.title}<div>
                    </li>`)
                        .appendTo(pics);
                    $('#results').text(`Showing Results For "${search.val()}"`);
                    page.show();
                });
            })
            .catch(e => console.error(e));
    });
}());