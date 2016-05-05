//core modules don't need file paths
var http = require('http'); //
var fs = require('fs'); //file system module - allows me to read, write, and delete files
var connect = require('connect');

var app=connect();

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

//old code - sample webpage tutorial
// http.createServer(function(request, response){
// 	var url=request.url;
// 	switch(url){
// 		case '/':
// 			getStaticFileContent(response, 'public/home.html','text/html');
// 			break;
// 		case '/about':
// 			getStaticFileContent(response, 'public/about.html', 'text/html');
// 			break;
// 		case '/contact':
// 			getStaticFileContent(response, 'public/contact.html', 'text/html');
// 			break;
// 		default:
// 			response.writeHead(404, {'Content-Type':'text/plain'});
// 			response.end('Error 404 - Page not found');
// 	}
// }).listen(9099);
// console.log('server running at http://localhost:9099');

// function getStaticFileContent(response, filepath, contentType){
// 	fs.readFile(filepath, function(error, data){
// 		if(error){
// 			response.writeHead(500,{'Content-Type':'text/plain'});
// 			response.end('500 - Internal Server Error.');
// 		}
// 		if(data){
// 			response.writeHead(200, {'Content-Type':'text/html'});
// 			response.end(data);
// 		}
// 	});
// }