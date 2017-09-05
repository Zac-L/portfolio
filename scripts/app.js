'use strict';

var projects = [];

function Project (projectData) {
    this.title = projectData.title,
    this.author = projectData.author,
    this.projectLink = projectData.projectLink,
    this.description = projectData.description;
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
    var theTemplateScript = $('#handle-template').html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var compliedHtml = theTemplate(this);

    $('#project-list').html(compliedHtml);
    // return compliedHtml;
};

Project.loadAll = function(projectData) {

    projectData.forEach(function(projectObject) {
        projects.push(new Project(projectObject));
    });
};

projects.forEach(function(projectTest) {
    $('#project-list').append(projectTest.toHtml());
});

Project.fetchAll = function() {
    if(localStorage.projectData) {
        Project.loadAll(JSON.parse(localStorage.getItem('projectData')));
    }
    else {
        $.getJSON('scripts/projectData.json')
            .done(function (projectData) {
                console.log('Done!', projectData);
                localStorage.setItem('projectData', JSON.stringify(projectData));
                Project.loadAll(projectData);
            })
            .fail(function(){
                alert(' haha ya im not working ');
            });
    }
};
