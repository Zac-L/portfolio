'use strict';
console.log('node had loaded!')

require('dotenv').config();


//Saving the code below to possibly see if I can get a database to work how I want it to. 
//
// const pg = require('pg');
// const client = new pg.Client(process.env.DATABASE_URL);
// client.connect();
// client.on('error', err => console.error(err));

const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const bodyParser = require('body-parser').urlencoded({ extended: true });

app.use( express.static( './public' ));

function proxyGitHub( request, response ) {
  console.log( 'Routing GitHub request for', request.params[0] );
  ( requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('/', function(request, response ){
  response.sendFile('/index.html', {root: './public'} )

});

app.listen(PORT, function() {
  console.log(`You are on port: ${PORT}`)
});
