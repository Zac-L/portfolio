'use strict';

var app = app || {};

(function(module){
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
        var compiledHtml = theTemplate(this);

        return compiledHtml;
    };

    projects.initIndexPage = function() {
        projects.forEach(function(projects) {
            $('#project-list').append(projects.toHtml());
            // console.log('what is', projects.toHtml()); saving this console log for now.
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
            console.log('fetchAll has loaded, grabbed data from local storage!');
        }
        else {
            $.getJSON('data/projectData.json')
                .done(function (projectData) {
                    console.log('Grabbed data from projectData.json', projectData);
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
    module.Project = Project;
})(app);