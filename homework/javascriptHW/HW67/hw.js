/*global $*/
(function () {
    'use strict';




    fetch('videoList.json')
        .then(r => {
            if (!r.ok) {
                throw new Error(`${r.status} ${r.statusText}`);
            }
            return r.json();
        })
        .then(videos => {

            const video = $('#video');
            const videoList = $('#videos');
            video.hide();
            videos.forEach(v => {
                $(`<li><span>${v.title}</span>
                    <img src=${v.image} alt=${v.title}>
                </li>`)
                    .appendTo(videoList).click(() => {
                        setTimeout(() => video.show(), 200);
                        video.attr('src', v.url);
                        video[0].play();
                    });
            });
        })
        .catch(err => console.error(err));


})();