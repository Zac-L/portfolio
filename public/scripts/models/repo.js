'use strict';

var app = app || {};

(function(module){

    const repos = {};

    repos.all = [];

    repos.getRepos = function(callback){
        $.ajax({
            url: 'https://api.github.com/users/zac_l/repos',
            method: 'GET',
            headers: {
                'Authorization': `token ${token}`
            }
        }).then(data => {
            repos.all = data;
            console.log('repos: ', repos.all);
        })
    }
    
    modules.repos = repos;
})(app);