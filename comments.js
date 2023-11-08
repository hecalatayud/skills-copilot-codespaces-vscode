// Create web server application
// Run the application using node.js
// http://localhost:3000/

var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;

  switch (path) {
    case '/':
      fs.readFile(__dirname + '/index.html', function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, { 'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html' });
        res.write(data, 'utf8');
        res.end();
      });
      break;

    case '/json.js':
      fs.readFile(__dirname + '/json.js', function(err, data) {
        if (err) return send404(res);
        res.writeHead(200, { 'Content-Type': path == 'json.js' ? 'text/javascript' : 'text/html' });
        res.write(data, 'utf8');
        res.end();
      });
      break;

    default:
      send404(res);
  }
}),

send404 = function(res) {
  res.writeHead(404);
  res.write('404');
  res.end();
};

server.listen(3000);
console.log('Listening on port 3000');
