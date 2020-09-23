(function () {
    'use strict';

    const search = $('#search');
    const next = $('#nextButton');
    const begin = $('#begButton');
    const back = $('#backButton');
    const end = $('#endButton');
    const form = $('#form');
    const page = $('#page');
    const picture = $('#picture img');
    const title = $('#picture div');
    let index = 0;

    page.hide();
    form.submit(event => {
        page.hide();
        event.preventDefault();
        picture.empty();
        $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${search.val()}&format=json&jsoncallback=?`)
            // $.getJSON('flickr.json')
            .then(pic => {
                picture.attr(
                    {
                        src: pic.items[index].media.m ,
                        alt: 'trees'
                    });
                title.text(`${pic.items[index].title}`);
                next.click(() => {
                    index++;
                    if (index>=(pic.items.length-1)) {
                        index = 0;
                    }
                    picture.attr({
                            src: pic.items[index].media.m,
                            alt: 'trees'
                    });
                    title.text(`${pic.items[index].title}`);
                });
                back.click(() => {
                    index--;
                    if (index <= 0) {
                        index = (pic.items.length - 1);
                    }
                    picture.attr({
                        src: pic.items[index].media.m ,
                        alt: 'trees'
                    });
                    title.text(`${pic.items[index].title}`);
                });
                begin.click(() => {
                    index = 0;                    
                    picture.attr({
                        src: pic.items[index].media.m,
                        alt: 'trees'
                    });
                    title.text(`${pic.items[index].title}`);
                });
                end.click(() => {
                    index = (pic.items.length - 1);
                    picture.attr({
                        src: pic.items[index].media.m,
                        alt: 'trees'
                    });
                    title.text(`${pic.items[index].title}`);
                });
                $('#results').text(`Showing Results For "${search.val()}"`);
                page.show();
            })
            .catch(e => console.error(e));
    });
}());