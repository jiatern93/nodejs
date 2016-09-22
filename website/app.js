//core modules don't need file paths
var http = require('http'); //
var fs = require('fs'); //file system module - allows me to read, write, and delete files
var express = require('express');

var app=express();

function profile(request, response){
	console.log('user requested profile');
}

//404 Error
function send404Response(response){
	response.writeHead(404, {'Content-Type':'text/plain'});
	response.write("Error 404 - page not found :c");
	response.end();
}

//Handle a user request
function OnRequest(request, response){
	if (request.method == 'GET' && request.url == '/'){
		response.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream('./public/home.html').pipe(response); //for better performance
	} else{
		send404Response(response);
	}
}

http.createServer(OnRequest).listen(9099);
app.use('/profile', profile);
console.log("Server is now running at http://localhost:9099");