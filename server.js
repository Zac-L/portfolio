'use strict';
console.log('node had loaded!')

const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use( express.static( './public' ));

app.get('/', function(request, response ){
  response.sendFile('/index.html', {root: './public'} )

});

app.listen(PORT, function() {
  console.log(`You are on port: ${PORT}`)
});
