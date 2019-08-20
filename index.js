'use strict';
var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader("Content-Type", "text/html; charset=utf-8");
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('./index.html', 'utf8', function (err, data) {
			response.writeHead(200, {'Content-Type':'text/html'});
			response.write(data);
			response.end();
		});

	} else {
		fs.readFile('./images/error.jpg', "binary", function(err, file) {
			response.writeHead(404, {'Content-Type': 'image/jpg'});
			response.write(file, "binary");
			response.end();
		});
		
	}
});

server.listen(9000);