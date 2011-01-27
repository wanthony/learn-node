var http = require('http'),
	url = require('url');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var parts = url.parse(req.url, true);
	
	if (parts.pathname == "/post") {
		console.log("Posting new client search");
		console.log("Client: " + parts.query['client']);
		console.log("Source: " + parts.query['source']);
		console.log('User: ' + parts.query['user']);
		
		res.end('Posted new client search\n\n' + JSON.stringify(parts));
	}
	
	res.end('Hello, World!\n');
	
}).listen(8124);

console.log("Server running at http://127.0.0.1:8124");