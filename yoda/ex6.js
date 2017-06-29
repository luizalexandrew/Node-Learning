var promise = new Promise(function(resolve, reject){

	console.log('BIRRR');

	let boo = true;


	setTimeout(function() {

		if(boo){
			resolve("Deu certo :D");
		}else{
			reject("Deu errado :/")
		}

	}, 5000);

}).then(function(response){
	console.log(response);
}).catch(function(error){
	console.log("[ERROR]");
	console.log(error);
});



