/*
function getName(){
    return 'Rodrigo'
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

const obj = {
    logFn: logFn
}

logFnResult(getName);

function init(){
    const exemplo = 'Essa variável';

    return function(){
        console.log('1 - o valor da variável exemplo é: ${exemplo}.');

        return function(){
            console.log('2 - o valor da variável exemplo é: ${exemplo}.');
            
            return function(){
                console.log('3 - o valor da variável exemplo é: ${exemplo}.');
            }
        }
    }
}

const initFn1 = init();
const initFn2 = initFn1();
const initFn3 = initFn3();

initFn3();

console.log("Curryng")
/*
function soma(a, b){
    return a+b;
}

console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 4));
console.log(soma(2, 5));
*/
/*
function soma(a){
    return function(b){
        return a+b
    }
}

console.log("Nova forma!")

const soma2 = soma(2);

console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))

*/
/*
console.log("Hoisting de variáveis")

function fn(){
    console.log(text);

    var text = "Exemplo";
    console.log(text);

}

fn();

*/
/*
console.log('Imutabilidade 1');

const user={
    name:'Rodrigo',
    middleName:'Zeymer',
    lastName:'Auad'
};

function usuárioNomeCompleto(user){
    return{
        ...user, 
        nomeCompleto: '${user.name} ${user.lastName}'
    }
}
const userWithFullName = usuárioNomeCompleto(user);

console.log(userWithFullName, user);

*/
/*
console.log("Imutabilidade 2")

const students=[
    {
        name: 'Grace', 
        grade: 7
    }, 
    {
        name: 'Jennifer', 
        grade: 4
    }, 
    {
        name: 'Paul', 
        grade: 10
    }
];

function getApprovedStudents(studentsList){
    return studentsList.filter(student =>student.grade >=7);
}

console.log("Alunos Aprovados: ");
console.log(getApprovedStudents(students));

console.log('\nLista de alunos: ')
console.log(students);
*/

console.log("Tipos e variáveis")
/*
console.log("var, let, const")

var nameVar = "Rod";
let nameLet = 'Rod';
const nameConst = "Rod";

console.log("nameVar: ${nameVar}")
console.log("nameLet: ${nameLet}")
console.log("nameConst: ${nameConst}")

//Escopo global
{
    //Escopo de bloco
}

function test(){
    //Escopo local
}
*/

/*

var test = 'exemplo';
(()=>{
    var test;
    console.log('Valor dentro da função "${test}"');

    if(true){
        test = 'Exemplo';
        console.log('Valor dentro do if "${test}"');
    }
    console.log('Valor após a execução do if  "${test}"');
})();

*/

console.log("TIPOS")
/*
//Retorna o tamanho de uma String

const textSize = 'Texto'.length;
console.log("Quantidade de letras: " + textSize);

//Retorna um array quebrando a String por um delimitador
const splittedText = "Texto".split("x");
console.log('\nArray com as posições pelo delimitador: ' +splittedText);

//Busca por um valor e o substitui por outro
const replacedText = "Texto".replace("Text", "txeT");
console.log("\nSubstituição de valor:", replacedText);

//Retorna a "fatia" de um valor
const lastChar = "Texto".slice(-1);
console.log('\nÚltima letra de uma String: ', lastChar);

const allWithoutLastChar = "Texto".slice(0, -1);
console.log('\nValor da String da primeira letra menos a última: ', allWithoutLastChar);

const secondToEnd = "Texto".slice(1);
console.log('\nValor da string da segunda letra até a última: ', secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0,2);
console.log('\nAs duas letras primeiras letras são: ', twoCharsBeforeFirstPos);
*/
/*
//Trasnformar número para string
const myNumber = 12.4032;

const numberAsString = myNumber.toString();
console.log("Número transformado em string: ", typeof numberAsString);

//Retorna número com um númeto de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNúmero com duas casas decimais", fixedTwoDecimals);

//Transforma uma String em float
console.log("\nString parseada para float: ", parseFloat('13.22'));

//Transforma uma String em int
console.log("\nString parseada para in: ", parseInt('13.20'));

const nullVariable = null;

console.log(nullVariable);

let undefinedVariable;
console.log("Tipo de variável: ", typeof undefinedVariable);

const isActive = true;
const isAuthenticated = false;
console.log("Tipo de variável: ", typeof isActive);

*/

let user = {
    name:"Guilherme"
};

//Alterando a propriedade de um objeto
user.name = "Outro nome 1";
user["name"] = "Outro nome 2";

const prop = "name";
user[prop] = "Outro nome 3";

//Criando uma propriedade
user.lastName = "Sobrenome!"

//Deletando uma propriedade
delete user.name;

Tipos e variáveis 12.33