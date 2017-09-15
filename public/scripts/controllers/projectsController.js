'use strict';
var app = app || {};

(function(module) {
  const projectsController = {};

  projectsController.init = () => {
    console.log('projectsController is listening');
    $('.tab-content').hide();
    $('#project-content').show();
  }

  module.projectsController = projectsController;
})(app);