//formas literais de criação de objeto
var item = {};
var item2 = {nome: 'refrigetente', preço: 23.5, ativo: true}
var pessoa = {nome: 'lenilson', idade: 21, objetivos: 'Adiquirir mais e mais conhecimento'};
var pessoa1 = {nome: 'wittorya', idade:24, detalhes:{detalhe: 'chata' }};

//forma construtora

var construtora = new Object();
construtora.nome = 'Lenilson Lira'
construtora.idade = 21

// chamadas no console
console.log(construtora.nome);
console.log(pessoa.idade + ' anos');
console.log(pessoa.objetivos);
console.log(item2['ativo']);
console.log(pessoa1.detalhes.detalhe)
