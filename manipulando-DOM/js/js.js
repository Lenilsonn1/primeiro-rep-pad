//manipulando DOM

var nomeBootInput = document.getElementById ('nomeBoot');

function selecionarCampos(){
console.log( 'Typeof: ' + typeof nomeBootInput);
console.log('object call' + Object.prototype.toString.call(nomeBootInput));
//alert('nomeBootInput');

//recuperar infoemação imput;
console.log('Recuperar valor com value' + nomeBootInput.value);

// nomeBootInput.disabled = true ;
// console.log('desable: nomeBootInput.disabled = true');


nomeBootInput.readOnly = true ;
console.log('desable: nomeBootInput.ReadOnly = true');

 console.log('tagName: ' + nomeBootInput.tagName);
 console.log('tagName type: ' + nomeBootInput.type );

// Value Get Set 
 nomeBootInput.value = 'Lenilson Lira';
}

var estadoSelectBoot = document.getElementById('estadoSelectBoot');

function selecionarEstado(){
    console.log('object call' + Object.prototype.toString.call(estadoSelectBoot));
    console.log('Recuperar com value' + estadoSelectBoot.value);
    console.log('tagName: ' + estadoSelectBoot.tagName);
    console.log('tagName type: ' + estadoSelectBoot.type );
    console.log('Recuperando com array ' + estadoSelectBoot.selectedIndex);
    console.log('Recuperar item ' + estadoSelectBoot.selectedOptions.item(0));

    estadoSelectBoot.selectedOptions
    estadoSelectBoot.selectedOptions.item(0);
    estadoSelectBoot.selectedOptions[1];
    estadoSelectBoot.length;
    
    // estadoSelectBoot.value = 'PB';
    // estadoSelectBoot.disabled = true;
    // estadoSelectBoot.reaaOnly = true;
    // console.log('Estado em modo disabled:');
}

/*--------------------------------------------------------------------------------------*/

var exampleCheckBox = document.querySelector('#exampleCheck1');



function selecinarCampoChek (){
   console.log('object call ' , Object.prototype.toString.call(exampleCheckBox));
   console.log('tagName: ' + exampleCheckBox.tagName);
   console.log('tagName type: ' + exampleCheckBox.type );
   console.log('valor value: ' + exampleCheckBox.value);
   console.log('valor value: ' + exampleCheckBox.checked);// ver se o campo está chekado
}

var exampleCheckBoxHtml = document.querySelector('input[type=checkbox]');

function selecionarCampoCheckHtml(){
    
    console.log('object call ' , Object.prototype.toString.call(exampleCheckBoxHtml));
    console.log(exampleCheckBoxHtml);
    console.log(exampleCheckBoxHtml.name);
    console.log(exampleCheckBoxHtml.value);
    exampleCheckBoxHtml.checked = true;
}

//radio
var formaContatoTelRadio = document.querySelector('[name = formaContatoBoot]')
var formaContatoEmailRadio = document.querySelector('[name = formaContatoBoot]')

function testeRadio(){
    console.log('valor checkd(marcado)', formaContatoTelRadio.checked);
    console.log('valor checkd(marcado)', formaContatoEmailRadio.checked);
}

function selecionarCampoRadio(){
    console.log('object call ' , Object.prototype.toString.call(formaContatoTelRadio));
    alert(formaContatoTelRadio);
    console.log('tagType', formaContatoTelRadio.type);
    console.log('tagName: ', formaContatoTelRadio.name);
    console.log('valor value: ', formaContatoTelRadio.value);
    console.log('valor checkd(marcado)', formaContatoTelRadio.checked);
    formaContatoRadio.checked = true;
}

var radios = document.getElementsByTagName('formaContatoBoot');

function selecionarCamposRadios(){
    console.log('object call ' , Object.prototype.toString.call(radios));
}

var checkedes = document.getElementsByClassName('checkbox');

var selects = document.getElementsByTagName('select');

function selecionados (){
    console.log('quantos intens encontrados: ', selects.length)
}

//querySelectorAll

var elementsAll = document.querySelectorAll('input[type = text]');

var formulario = document.querySelector('#formBoot');
console.log('form type: ', Object.prototype.toString.call(formulario));
console.log('chamadas de form via array[]', formulario[0]);

function exibirDados (elemento){
    console.log(elemento);
} 


/*
createElement = criação de elementos EX: div, tags
createTextNode = criação de textos dentro de elementos
appendChild = colocar elementos dentro da arvore DOM
insertBefore = inserir elementos antes dos elementos
innerHTML
removeChild = remover elementos
replaceChild = atualizar elementos
*/

var paragrafo = document.createElement('p');
var texto = document.createTextNode('Quem está codando é lindo');
// paragrafo = texto;
paragrafo.appendChild(texto);

//adicionando texto no bory

document.body.appendChild(paragrafo);

var formFilhoNome = document.getElementById('nomeBoot');
var formPai = formFilhoNome.parentNode;

// formPai = document.body.appendChild(paragrafo);

formPai.insertBefore(paragrafo, formFilhoNome);

formPai.replaceChild(formFilhoNome,paragrafo);

formPai.replaceChild(paragrafo, formFilhoNome);

formPai.removeChild(paragrafo);

//Buscar campos de formulario 

var formulario1 = document.getElementById('formBoot');

console.log('primeiro elemento do form', formulario1.firstChild);
console.log('ultimo filho do form', formulario1.lastChild);
console.log('ultimo elemento filho do form', formulario1.lastElementChild);

var p2 = document.createElement('p');
p2.innerText = 'teste'

document.body.appendChild(p2);