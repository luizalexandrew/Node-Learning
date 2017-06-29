// (function sith(){
// 	console.log(this);
// })();

function sith(){
	console.log(this);
}

var lordSith = sith.bind({name: 'Darth Bane', lado: "The Dark Side"}); //retorna uma fuñção com outro escopo

lordSith();

console.log('-------------------');


sith.call('luizalexandrew');