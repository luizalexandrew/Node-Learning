module.exports = function(status){
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