'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

    aboutController.init = () => {
      console.log('aboutController is listening');
    $('.tab-content').hide();
    $('#about-content').show();
  }

  module.aboutController = aboutController;
})(app);