var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next){
	console.log(req);
	if(req.url === '/favicon.ico'){
		console.log("true");
		res.writeHead(200, {'Content-Type':'image/x-icon'});
		res.end();
	}else{
		next();
	}
});

app.get('/', function (req,res) {

	var user = {
		usuario: "luizalexandrew",
		senha: "minhasenha"
	}
	res.status(200).json(user);

});

var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;



	console.log('Example app listening at %s', port); 
});