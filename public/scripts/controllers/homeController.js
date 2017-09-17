'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.init = () => {
    console.log('home controller has loaded!');
    $('main > section').show();
    app.Project.fetchAll();
  }

  module.homeController = homeController;
})(app);