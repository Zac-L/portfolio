'use strict';

var projects = [];

function Project (projectData) {
    this.title = projectData.title,
    this.author = projectData.author,
    this.projectLink = projectData.projectLink,
    this.description = projectData.description;
}

Project.prototype.toHtml = function() {
    var theTemplateScript = $('#handle-template').html();
    var theTemplate = Handlebars.compile(theTemplateScript);
    var compliedHtml = theTemplate(this);

    return compliedHtml;
};

projects.initIndexPage = function() {
    projects.forEach(function(projects) {
        $('#project-list').append(projects.toHtml());
        console.log('what is', projects.toHtml());
    });
};

Project.loadAll = function(projectData) {

    projectData.forEach(function(projectObject) {
        projects.push(new Project(projectObject));
    });
};

Project.fetchAll = function() {
    if(localStorage.projectData) {
        Project.loadAll(JSON.parse(localStorage.getItem('projectData')));
        projects.initIndexPage();
        console.log('in the if statement');
    }
    else {
        $.getJSON('scripts/projectData.json')
            .done(function (projectData) {
                console.log('Done!', projectData);
                localStorage.setItem('projectData', JSON.stringify(projectData));
                Project.loadAll(projectData);
                projects.initIndexPage();
            })
            .fail(function(){
                console.log(' haha ya im not working ');
            })
            .always(function(){
                console.log('Always is working!');
            });
    }
};