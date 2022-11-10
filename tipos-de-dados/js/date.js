var data = new Date();
console.log(data);

var dataString = new Date('2023-11-22')
console.log(dataString)

console.log(dataString.getFullYear());
console.log(dataString.getMinutes());
console.log(dataString.getDay());
console.log(dataString.getDate()+1);

var dataParam = new Date(2030, 11, 2);
console.log(dataParam);