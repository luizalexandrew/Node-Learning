var express = require('express');
var route = express.Router();

route.get('/', function(request, response){
	response.status(201).json({
		user: "luizalexandrew",
		email: "luiz.alexandre@live.com"
	});
});


module.exports = route;