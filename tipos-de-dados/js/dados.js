// variaveis string = todas variaveis com texto

var nome = 'Lenilson Lucas';
var sobreNome = 'Santos Lira';

// variaveis Number = todas as variaveis inteiras 

var idade = 21.
var salario = 1000;

// Variaveis Boollean = verdadeiro ou falso

var contaCorrente = true;
var contaSalario = false;

if(contaCorrente == true){
    console.log('Sua conta é corrente e você recebe um salario de : ' + salario);
}else{
    console.log('Você utiliza a conta salario e recebe: '+ salario);
}

// ! sinal de negação !!verificar se é true ou false

//valores false e true 

console.log(!!"")
console.log(!!0)
console.log(!!-0)
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)

// valores true 

console.log(!!Array)
console.log(!!Function)
console.log(!!Object)

// null - undefined
var nome = undefined; // jamais usar 
var nome = null; // valor nulo, limpar espeço na memoria

console.log('Undefined é igual a null : ', undefined == null);
console.log('Undefined ', typeof undefined);
console.log('null', typeof null);

var pessoa = {nome: 'pedro'};
console.log(pessoa.nome);
// console.log(pessoa.idade); valor undefined