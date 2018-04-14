var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

console.log('Movie List RESTful API server started on: ' + port);
































// server.js
const express = require('express');
const app = express();
const path = require('path');
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
 
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
 
 
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
  });
   
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);