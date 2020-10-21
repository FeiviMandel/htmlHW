/* global google*/
window.initMap = function () {
    'use strict';

    const lakewood = { lat: 40.095657332825816, lng: -74.22207079649733 };

    const map = new google.maps.Map(document.getElementById('map'), {
        center: lakewood,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    const placesList = $('#sidebar ul');
    const tagInput = $("#tag");
    const rowsInput = $("#rows");
    const infoWindow = new google.maps.InfoWindow({ maxWidth: 500 });

    // let selectedPlace;

    $('#searchform').submit(e => {
        e.preventDefault();

        fetch(`http://api.geonames.org/wikipediaSearch?q=${tagInput.val()}&maxRows=${rowsInput.val()}&username=<>&type=json`)
            .then(r => {
                if (!r.ok) {
                    throw new Error(`${r.status} ${r.statusText}`);
                }
                return r.json();
            })
            .then(wikiData => {
                console.log(wikiData);

                const bounds = new google.maps.LatLngBounds();

                wikiData.geonames.forEach(place => {
                    const marker = new google.maps.Marker({
                        position: { lat: place.lat, lng: place.lng },
                        map: map,
                        animation: google.maps.Animation.DROP,
                        title: place.title,
                        icon: place.thumbnailImg ? {
                            url: place.thumbnailImg,
                            scaledSize: new google.maps.Size(50, 50)
                        } : null
                    });

                    const placeElem = $(`<li>
            <img src="${place.thumbnailImg || 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png'}" alt="${place.title}">
            <span class="title">${place.title}</span>
            <div class="summary">${place.summary}</div>
          </li>`)
                        .appendTo(placesList)
                        .click(() => {
                            const b = map.getBounds();
                            b.extend(marker.position);
                            map.fitBounds(b);

                            setTimeout(() => {
                                map.panTo(marker.position);
                                setTimeout(() => map.setZoom(18), 1000);
                            }, 1000);
                            placeSelected();
                        });

                    function placeSelected() {
                        infoWindow.setContent(`${place.summary}<hr>
              <a target="_blank" href="http://${place.wikipediaUrl}">more info</a>`);
                        infoWindow.open(map, marker);
                        $('.summary').slideUp('slow');
                        placeElem.find('.summary').slideDown('slow');
                    }

                    marker.addListener('click', () => {
                        placeSelected();
                    });

                    bounds.extend(marker.position);
                });

                map.fitBounds(bounds);
            })
            .catch(e => alert(e.message));
    });

    //////////////////////////////////////
    const markers = [];
    const circles = [];
    const rectangles = [];
    const polylines = [];
    const polygons = [];

    const drawingManager = new google.maps.drawing.DrawingManager();
    drawingManager.setMap(map);

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {
        console.log(event);
        if (event.type === 'marker') {
            markers.push(event.overlay.position);
            localStorage.markers = JSON.stringify(markers);
        }
        else if ((event.type === 'circle')) {
            circles.push({ center: event.overlay.center, radius: event.overlay.radius });
            localStorage.circles = JSON.stringify(circles);
        }
        else if ((event.type === 'rectangle')) {
            rectangles.push(event.overlay.bounds);
            localStorage.rectangles = JSON.stringify(rectangles);
        }
        else if ((event.type === 'polyline')) {
            polylines.push(event.overlay.getPath().getArray());
            localStorage.polylines = JSON.stringify(polylines);
        }
        else if ((event.type === 'polygon')) {
            polygons.push(event.overlay.getPath().getArray());
            localStorage.polygons = JSON.stringify(polygons);
        }
    });
    if (localStorage.circles) {
        const c = JSON.parse(localStorage.circles);
        c.forEach(circle => {
            new google.maps.Circle({
                map: map,
                center: circle.center,
                radius: circle.radius
            });
        });
    }

    if (localStorage.rectangles) {
        const r = JSON.parse(localStorage.rectangles);
        r.forEach(rectangle => {
            new google.maps.Rectangle({
                map: map,
                bounds: rectangle
            });
        });
    }

    if (localStorage.polylines) {
        const pl = JSON.parse(localStorage.polylines);
        pl.forEach(polyline => {
            new google.maps.Polyline({
                map: map,
                path: polyline
            });
        });
    }

    if (localStorage.polygons) {
        const pg = JSON.parse(localStorage.polygons);
        pg.forEach(polygon => {
            new google.maps.Polygon({
                map: map,
                path: polygon
            });
        });
    }

    if (localStorage.markers) {
        const m = JSON.parse(localStorage.markers);
        m.forEach(pos => {
            new google.maps.Marker({
                position: pos,
                map: map
            });
        });
    }
};