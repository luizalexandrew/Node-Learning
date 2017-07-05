var express = require('express');

var app = express();

app.use('/', require('./index.js'));

app.use(function(request, response, next){
	var err = new Error("Não Encontrado");
	err.status = 404;
	next(err);
});

app.use(function(err, request, response, next){
	console.log(err.stack);
	response.status(err.status || 500).json({
		err: err.message
	});
});

var serve = app.listen(3000, function(){

	console.log("Aplicação rodando na porta 3000");
})
