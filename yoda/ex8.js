// console.log(process.argv);

//export DEBUG=*

//export DEBUG=livro_nodejs:*


const http = require('http');
const fs = require('fs');
const debug = require('debug')('livro_nodejs')

var fileName = process.argv[2];
var quantidadeParagrafo = process.argv[3];
const USAGE = 'USO: node loremipsum.js {arquivo} {quantidadeParagrafo}'

if(!fileName && !quantidadeParagrafo){
	return console.log(USAGE);
}

http.get('http://loripsum.net/api/' + quantidadeParagrafo, function (res) {

	var text = '';

	res.on('data', function(chunk){
		text += chunk;
	});

	res.on('end', function(e){
		console.log(text);
	
		fs.writeFile(fileName, text, function(){
			console.log("Arquivo" + fileName + "pronto :D");
		})


	})

	debug("Vamos ver o como é o debug do node")

}).on('error', function(e){
	console.log('Got error: ' + e.message)
})