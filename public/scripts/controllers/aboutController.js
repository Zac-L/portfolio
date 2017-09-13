'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

    aboutController.init = () => {
    $('.tab-content').hide();
    $('#about-content').show();
  }

  module.aboutController = aboutController;
})(app);