'use strict';

$(document).ready(function () {

    $('#przycisk1').click(function () {
        var ostatni = $('p:last-child');
        $(ostatni).prependTo('#paragrafy');
    });
    $('#przycisk2').click(function () {
        var pierwszy = $('p:first-child');
        $(pierwszy).appendTo('#paragrafy');
    });
});
