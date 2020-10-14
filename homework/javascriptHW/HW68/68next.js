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
    const a = $('#a');
    const b = $('#b');
    const c = $('#c');
    const d = $('#d');
    const e = $('#e');
    const f = $('#f');
    const g = $('#g');
    const h = $('#h');
    const images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg', 'images/img6.jpg', 'images/img7.jpg', 'images/img8.jpg', 'images/img9.jpg', 'images/img10.jpg', 'images/img11.jpg', 'images/img12.jpg', 'images/img13.jpg', 'images/img14.jpg', 'images/img15.jpg', 'images/img16.jpg', 'images/img17.jpg'];
    let index = 0;
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