'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = () => {
    $('.tab-content').hide();
    $('#project-content').show();
  }

  module.projectController = projectController;
})(app);