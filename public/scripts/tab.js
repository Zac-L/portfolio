
'use strict';

var articleView = {};

articleView.handleMainNav = function() {
    $('nav.main-nav').on('click', '.tab', function() {
        $('.tab-content').hide();
        // var clickedTab = $(this).attr('data-content');
        $('#' + $(this).data('content')).fadeIn();
    });

    $('.main-nav .tab:first').click();
};
articleView.handleMainNav();


///Testing this, atm it is still not working. 

// function handleNav () {
//     $('.tab').click( function(){
//       $('.tab-content').hide();  
//       var clickedTab = $(this).attr('data-content');
//       $('#' + clickedTab).show();
  
//     })  
//   }