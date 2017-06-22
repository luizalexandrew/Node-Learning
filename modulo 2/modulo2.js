exports.minhaIdade = function(nome){
	console.log("Meu nome é " + nome);
};

exports.minhaProfissao = function(nome){
	console.log("Minha profissao é " + nome);
};


exports.teste = function(status){
	if(status === "sandbox"){
		return {
			token: "sandbox",
			email: "luizalexandrew@outlook.com"
		}
	}
	
	return {
		token: "oficial",
		email: "luiz.alexandre@live.com"
	}
	
};
