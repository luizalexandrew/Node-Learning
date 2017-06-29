function Droid(nome, lado, fala){
	this.nome = nome;
	this.lado = lado;

	this.falar = function(arg){
		return fala + " - " + arg;
	}

	this.me = function(){
		return this;
	}
}

let r2d2 = new Droid('r2d2', 'Light Side', '!@#!@#!@#CDQW!');
let bb8 = new Droid('bb8', 'Light Side', 'DASD!@!#SD!');

console.log(r2d2);
console.log(bb8);

console.log(bb8.falar('BIRRRLLL'));
