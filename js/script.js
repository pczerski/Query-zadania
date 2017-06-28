'use strict';

$(document).ready(function () {
    $('h2').hide();
    $('#przycisk').click(function () {
        $('#square').animate({
            left: '100px',
            width: '100px',
            height: '100px'
        }, 3000, function() {
            $('#square').css({backgroundColor: 'blue',
                             transition: 'all 5s ease-in-out'});
            //$('h2').delay(5000).show();
        });
        setTimeout(function() {
            $('h2').show();
        }, 8000);
    });
});
