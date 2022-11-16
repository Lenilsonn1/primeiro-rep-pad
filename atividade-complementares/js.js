// //array

// var arrayPessoas = ['lenilson', 'wittorya','juciana','karla', 'severino', 'alef'];
// mostrarArray(arrayPessoas)
// function mostrarArray (arrayPessoas){
//     console.log('olá Maria você conhece algum desses ?')
//     try {
//         for (let i = 0; i < arrayPessoas.length; i++) {
//             const pessoas = arrayPessoas[i];

//             console.log(pessoas);
            
            
//         }
//     } catch (error) {
//         console.log('nenhum item sendo mostrado')
        
//     }finally{
//         console.log('Não importa o que aconteça, sempre irei executar');
//     }
// }

// // erros 

// var errosJS = Error('Não vai da certo, repita!!!');

// console.log(errosJS.name , errosJS.message);



// percorrer arrays e saber cada tipo

var arrayDeTipos = ['Maria', '', 5.6, 1 , 0 , -1 , 18 , true, false , null, undefined, NaN, Infinity,
-Infinity, [], [1,2,'c#'], function(){return 10;}];

converterTipo(arrayDeTipos)

function converterTipo(tipos){
    try {
        for(var i = 0; i < tipos.length; i++){
            var tipo = tipos[i];
            console.log('###>>>Valor:', tipo , '-> Tipos de dados', typeof tipo);
            console.log('###>>>Valor:', String(tipo) , '-> Tipos de dados', typeof String(tipo));
            console.log('###>>>Valor:', Number(tipo) , '-> Tipos de dados', typeof Number(tipo));
            console.log('###>>>Valor:', Boolean(tipo) , '-> Tipos de dados', typeof Boolean(tipo));
            console.log('###>>>Valor:', Object(tipo) , '-> Tipos de dados', typeof Object(tipo));
            console.log(" /n ")
        }
    } catch (error) {
        console.log('ocorreu um error')
        console.log(error.name)
        
    }
}