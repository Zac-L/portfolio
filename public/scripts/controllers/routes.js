'use strict';

page( '/about', app.homeController.init );
page( '/home', app.aboutController.init );
page( '/projects', app.projectsController.init);
page.start();