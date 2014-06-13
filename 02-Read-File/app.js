// load http module
var http = require('http');

// load file system module
var fs = require('fs');

// create http server
http.createServer(function (req, res) {

	//open and read a file
	fs.readFile('../readme.md', 'utf8', function(err, data) {
		res.writeHead(200, {'content-type' : 'text/plain'});
		if (err) {
			// if error, cannot read the file
			res.write('Could not find or open file for reading\n');
		} else {
			// if no error, write file content to clinet
			res.write(data);
		}
		res.end();
	});
}).listen(8124, function() {
	console.log('bound to port 8124');
});

console.log('Server running on 8124');