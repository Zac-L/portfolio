
'use strict';

function handleNav () {
    $('.tab').click( function(){
        $('.tab-content').hide();  
        var clickedTab = $(this).attr('data-content');
        $('#' + clickedTab).show();
    });
}

handleNav();
console.log('handle nav has loaded');