function soma(v1,v2){
    // return v1[3];
    // return v1 + v2
    return v1.exec();
}

console.log('linha 1');
//throw new error('ocorreu um erro!!'); erro em geral
console.log('linha 2');

try {
    console.log(soma(10,20))    
} catch (error) {
    // console.log(error);
    console.log(error.name);
    console.log(error.menssage);
    // console.log(error.stack); bloco total de error
}finally{
    console.log('Sempre irei executar !!')
}