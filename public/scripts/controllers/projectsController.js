'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = function () {
    $('.tab-content').hide();
    $('#project-content').show();
  }

  module.projectController = projectController;
})(app);