// operadores logicos 

//  && = E
//  || = ou
//   | = não 
console.log('%%%%% "&&" %%%%% \n')
var result = (10 == 10) && (5 == 5);
var result1 = (10 == 10) && (5 == '5');
var result2 = (10 == 10) && (true == 'true1');

console.log('1 =', result);
console.log('2 =', result1);
console.log('3 =', result2);

// || (ou)
console.log('\n %%%%% "||" %%%%% ')

var comparação = (10 > 1) || (10 == 10);
var comparação2 = (10 < 1) || (10 == 11);
var comparação3 = true == true || true == false;

console.log('1 -',comparação);
console.log('2 -',comparação2);
console.log('3 -',comparação3);

// ! (not)
console.log('\n %%%%% "!" %%%%% ')
var negação = true;
console.log('1 -', negação);
console.log('2 -', !negação);
console.log('2 -', !!negação);