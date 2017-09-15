'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = () => {
    console.log('home controller is listening');
    $('main > section').show();
  }

  module.homeController = homeController;
})(app);