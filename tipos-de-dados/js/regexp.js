//forma literal de chamada do metodo
//serve para realizar chamados dentro da pagina

var regexp = /lindo/;
var regexpconstrutor = new RegExp("sou eu");

var lindo = 'Lenilson Lira, quem é o lindo ?  - sou eu';

console.log(regexp.test(lindo)); 
console.log(regexpconstrutor.exec(lindo));