// load http module
var http = require('http');

// create http server
http.createServer(function (req, res) {

	// content header
	res.writeHead(200, {'content-type' : 'text/plan'});

	// writes message
	res.write('Hello, World! 2\n');

	// signals communication complete
	res.end();
}).listen(8124);

console.log('Server running on 8124');