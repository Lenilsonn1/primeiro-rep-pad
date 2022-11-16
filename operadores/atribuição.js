/*// operador ' = '
var numero = 12;
var numero2 = 02;
var nome = 'lenilson';
var verdadeiro = true;

var numero = numero = numero2;


console.log(numero);

//operador '+='

var numero3 = 5;
numero3++;
numero3 += 2;
numero3 += numero
console.log(numero3)

nome += ' Lira';
console.log('Nome completo : ', nome)

//operador ' -= '

var sub = 30
sub -= 20;

console.log(sub);

// operador ' *= '

var mult = 2;
mult *= 10;
console.log('mult *= 10 = ', mult);

// operador ' /= '

var div = 20
div /= 4;

console.log('div /= 4 =', div);

// operador %=

var mod = 9;
mod %= 2;
console.log('mod %= 2 ', mod);

// operador **=

var exp = 3;
exp**= 3;
console.log('exp**= 3 ',exp);*/

//deslocamento de BITS
// operador <<= left shift

var num = 320
console.log('1 - num em base 10', num);
console.log('2 - num em base 2', num.toString(2));

num <<= 4

console.log('3 - num em base 2', num.toString(2));
console.log('4 - num em base 10', num);


// operador >>= rigth shift

var num2 = 320
console.log('1 - num2 em base 10', num2);
console.log('2 - num2 em base 2', num2.toString(2));

num2 >>= 4

console.log('3 - num2 em base 2', num2.toString(2));
console.log('4 - num2 em base 10', num2);

// operador >>>= RIGTH shift sem sinal
console.log('operador >>>= RIGTH shift sem sinal')

var num = -320
console.log('1 - num em base 10', num);
console.log('2 - num em base 2', num.toString(2));

num >>= 4

console.log('3 - num em base 2', num.toString(2));
console.log('4 - num em base 10', num);


