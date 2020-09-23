(function () {
    'use strict';

    const search = $('#search');
    const form = $('#form');
    const page = $('#page');
    const pics = $('#pics');

    page.hide();
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