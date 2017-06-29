function Droid(nome, lado, fala){
	this.nome = nome;
	this.lado = lado;

	this.falar = function(arg){
		return fala + " - " + arg;
	}
}

let c3po = new Droid('c3po', 'Light Side', 'DASD!@!#SD!');

Droid.prototype.getLanguages = function(){return this.languages;};

Droid.prototype.setLanguages = function(n){this.languages = n};

c3po.setLanguages(3000);
console.log(c3po.getLanguages());

let bb8 = new Droid('bb8', 'Light Side', 'DASD!@!#SD!');
bb8.setLanguages(1);
console.log(bb8.getLanguages());


//--------------------------------------------------

function BatleDroid(arma){
	this.arma = arma;
}

BatleDroid.prototype = Object.create(Droid.prototype);

var b1 = new BatleDroid('Black Bird');
b1.setLanguages(2)
console.log(b1.arma);
console.log(b1.getLanguages());