var http = require('http');
var url = require('url');


var server = http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-type': 'text/html; charset = utf-8'});
	res.write('<h1>Página Home</h1>');
	res.write(req.url);
	res.end();

});

server.listen(3000, function(){
	console.log("Servidor rodando na porta 3000");
});