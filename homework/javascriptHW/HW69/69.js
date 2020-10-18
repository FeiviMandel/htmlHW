/* globals google, $ */
function initMap() {
    'use strict';

    const form = $('#form');
    const img = $('#sidebar ul');
    const search = $('#search');
    const loc = { lat: 40.095657332825816, lng: -74.22207079649733 };
    let map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 2,
    });
    const bounds = new google.maps.LatLngBounds();
    const infoWindow = new google.maps.InfoWindow();
    form.submit(event => {
        event.preventDefault();
        map = new google.maps.Map(document.getElementById('map'), {
            center: loc,
            zoom: 2,
        });
        img.empty();
        $.getJSON(`http://api.geonames.org/wikipediaSearch?q=${search.val()}&maxRows=10&username=feivi&type=json`)
            .then(x => {
                x.geonames.forEach(r => {
                    $(`<li>
                        <img src="${r.thumbnailImg}" alt="${r.title}">
                        <span id="title">${r.title}<span><div id= "summary">${r.summary}</div>
                    </li>`)
                        .appendTo(img)
                        .click(function () {
                            console.log(r);
                            map.panTo(pos);
                            map.setZoom(8);
                        });
                    let pos = { lat: r.lat, lng: r.lng };
                    bounds.extend(pos);
                    let marker = new google.maps.Marker({
                        position: pos,
                        map: map,
                        title: (`${r.title}`)
                    });
                    if (r.thumbnailImg) {
                        marker.setIcon({
                            url: (`${r.thumbnailImg}`),
                            scaledSize: new google.maps.Size(40, 40)
                        });
                    }
                    marker.addListener('click', () => {
                        infoWindow.setContent(`${r.summary}<br><a target="_blank" href=https://${r.wikipediaUrl}>more info</a>`);
                        infoWindow.open(map, marker);
                    });
                });
                map.fitBounds(bounds);
            })
            .catch(e => console.error(e));
    });
}