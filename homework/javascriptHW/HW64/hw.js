/*global $*/
(function () {
    'use strict';

    const first = $('#firstName');
    const last = $('#lastName');
    const street = $('#street');
    const city = $('#city');
    const state = $('#state');
    const zip = $('#zip');

    $("<form><label>First Name:<input id='firstName'placeholder='Enter your first name' /></label><label>Last Name:<input id='lastName' placeholder='Enter your last name' /></label ><label>Street:<input id='street' placeholder='Enter your street' /></label><label>City:<input id='city' placeholder='Enter your city' /></label><label>State:<input id='state' placeholder='Enter your state' /></label><label>Zip:<input id='zip' placeholder='Enter your zip code' /></label><input type='checkbox' id = 'checkbox'>I verified that all information is correct<button id= 'button' disabled>Submit</button></form>").appendTo("body");
    $("<div id = 'div1'></div><div id = 'div2'></div><div id = 'div3'></div><div id = 'div4'></div>").appendTo("body");
    $("#button").click(function (event) {
        event.preventDefault();
        $('#div1').text('here is what you submitted:');
        $('#div2').text(`${first.val()} ${last.val()}`);
        $('#div3').text(`${street.val()}`);
        $('#div4').text(`${city.val()}, ${state.val()} ${zip.val()}`);
    });

    $('#checkbox').change(function () {
        if ($("input:checked")) {
            $('#button').prop('disabled', false);
        }
    });
    $('#checkbox').change(function () {
        if (!$("input:checked")) {
            $('#button').prop('disabled', true);
        }
    });
}());