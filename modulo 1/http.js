var http = require('http');

var server = http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-type': 'text/plain'});
	res.write('Hello World');
	res.end();

});

server.listen(3000, function(){
	console.log("Servidor rodando na porta 3000");
});