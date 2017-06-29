// console.log(process.argv);

const http = require('http');
const fs = require('fs');

http.get('http://loripsum.net/api/1', function (res) {

	var text = '';

	res.on('data', function(chunk){
		text += chunk;
	});

	res.on('end', function(e){
		console.log(text);
	
		fs.writeFile('lorem.html', text, function(){
			console.log("Arquivo pronto :D");
		})


	})
	
}).on('error', function(e){
	console.log('Got error: ' + e.message)
})