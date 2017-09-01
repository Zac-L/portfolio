'use strict';

function Project (inputObj) {
    this.title = inputObj.title,
    this.author = inputObj.author,
    this.projectLink = inputObj.projectLink,
    this.description = inputObj.description;
}

////Saving for now, till I can get handlebars to work correctly. 

// Project.prototype.toHtml = function() {
//     var $newProject = $('project.template').clone();
//     $newProject.removeClass('template');

//     $newProject.find('title').text(this.title);
//     $newProject.find('projectLink').html(this.projectLink);
//     $newProject.find('description').text(this.description);

// };

Project.prototype.toHtml = function() {
    var source = $('#handle-template').html();
    var template = Handlebars.compile(source);
    var html = template(this);
    return html;
};