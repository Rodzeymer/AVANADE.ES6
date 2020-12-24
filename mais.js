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

//FUNCTIONS
//console.log("Tipos e variáveis")
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

//console.log("TIPOS")
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
/*
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
*/

/*
const user = {
    name: 'Rodrigo',
    lastName: "Auad"
}

//Recupera as chaves do objeto
console.log("Propriedades do objeto user: ", Object.keys(user));

//Recupera os valores das chaves do objeto
console.log("\nValores das propriedades do objeto user: ", Object.values(user));

//Recupera um array de arrays contendo [nome_prop, valor_prop]
console.log("\nLista de propriedades e valores: ", Object.entries(user));

//Mergear propriedades de objetos
Object.assign(user, {fullName:"Rodrigo Auad"});

console.log("\nAdiciona a propriedade fullName no objeto user", user);
console.log("\nRetorna um novo objeto mergeando dois ou mais objetos", Object.assign({}, user, {age: 26}))

//Previne todas as alterações em um obbjeto
const newObj = {foo: 'Bar'};
Object.freeze(newObj);
console.log("\nVariável newObj após alterações: ", newObj)

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo"

console.log("\nVariável newObj após alterações: ", newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: "Rodrigo"};
Object.seal(person);

person.name = "Rodrigo Auad";
delete person.name;
person.age = 34;

console.log('\nVariável person após as alterações: ', person);

*/
/*

const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('Symbol1 é igual a sumbol2: ', symbol1 === symbol2);

//Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Rodrigo',
    [nameSymbol2]: 'Outro',
    lastName: 'Auad'
}

console.log(user);

//Symbols criam propriedades que não são enumberables
for (const key in user){
    if (user.hasOwnProperty(key)){
    console.log('\nValor da chave ${key}: ${user[key]}');
    }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertyDescriptor(user));

//Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user: ', Reflect.ownKeys(user));

//Criar um enum
const directions={
    UP: Symbol('UP'),
    DOWN: Symbol('DOWN'),
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
};



function fn(){
    return 'Code here';

}

const arrowFn = () => 'Code here';
const arrowFn2 = () =>{
    //mais de uma expressão
    return 'Code here';
}
//Funções também são objetos
    fn.prop = 'Posso criar propriedades';

    console.log(fn());
    console.log(fn.prop);

    //Receber parâmetros
    const logValue = value => console.log(value);
    const logFnResult = fnParam => console.log(fnParam());

    logFnResult(fn);
//Reeber e retornar funções
const controlFnExec => fnParam => allowed => {
    if(allowed){
        fnParam();
    }


const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); //Executa a função fn
handleFnExecution(); //Não executará a função fn

//controlFnExec como função
console.log("OK")
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam
            console.log("OK1")
        }
        console.log("OK2")
    }
    console.log("OK3")
}
console.log("OK4")
controlFnExec()



//FUNCTION2
(()=>{
    this.name = "arrow funcion";

    const getNameArrowFn = () => this.name;
    
    function getName(){
        return this.name;
    }
    
    const user = {
        name: "Rodrigo",
        getNameArrowFn, 
        getName
    
    }
    
    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();


//Array

const users =['André', 'Rodrigo', 'Maria'];

const gender={
    MAN: Symbol('M'), 
    WOMAN: Symbol('W')
}

const persons=[
    {
        name:'André', 
        age:26,
        gender: gender.MAN
    },
    {
        name:'Rodrigo',
        age:34,
        gender: gender.MAN
    }, 
    {
        name: 'Maria',
        age:43,
        gender: gender.WOMAN
    }
];

//Retornar a quantidade de itens de um array
console.log('Itens: ', persons.length);

//Verificar se é Array
console.log('A variável persons é um array: ', Array.isArray(persons));

//Iterar os itens do array
persons.forEach((person, index, arr)=>{
    console.log('Nome: ', person.name);
})

//Filtrar array
const mens = persons.filter(person=>person.gender === gender.MAN);
console.log('\nNova lista apenas com homens', mens);
const womens = persons.filter(person=>person.gender === gender.WOMAN);
console.log('\nNova lista apenas com mulheres', womens);

//Transformar um novo
const personWithCourse = persons.map(person =>{
    person.course = 'Introdução à JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course: ', personWithCourse)

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idades das pessoas', totalAge);

//Juntando operações
const totalEvenAges = persons.filter(person => person.age %2 === 0)
.reduce((age, person) => {
    age+= person.age;
    return age;
}, 0);

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges);


console.log('Operadores');
//Módulo (%)
//Operador binário. retorna o inteiro restante da divisão de dois operandos.

console.log('12 dividido por 5, resto 2 (12 % 5 = 2) retorna 2');

//Incremento (++) e Decremento (--)

++x 
x++

--x 
x--

//Negação (-) e Adição (+)

13
+'3' //retorna 3
+true //retorna 1
+false //retorna 0
-true //retorna -1

//Operador de exponenciação(**)
2**3 //retorna 9
10 ** -1 //retorna 0.1

//Operador de agrupamento ()
2*(3+2) //Retorna 10

//Igualdade (==)
//Retorna verdadeiro caso os operandos sejam iguais. 3==var2
'3' == var1
3=='3'

//Não igual (!=)
//Retonra verdadeiro caso os operando não sejam iguais. var1 != 4
var2 != '3'

//Estritamente igual (===)
//Retorna verdadeiro caso os operandos sejam iguais e do mesmo tipo. Veja também Object .is e igualdade
3 === var1

//Estritamente não igual (!==)
//Retorna verdadeiro caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.
var1 !== '3'
3 !== '3'

//Maior que (>)
//Retorna verdadeiro caso o operando da esqueda seja maior que o da direita.

var2 > var1
'12' > 2

//Maior que ou igual (>=)
//Retorna verdadeiro caso o operando da esqueda seja maior ou igual ao da direita
var2 >= var1
var1>=3

//Menor que (<)
//Retorna verdadeiro caso o operando da esquerda seja menor que o da direita.
var1 < var2
'12' < '2'

//Menor que ou igual(<=)
//retorna verdadeiro caso o operando da esqueda seja menor ou igual ao da direita.
var1 <= var2
var2 <= 5

//Ternário
Condição ? Valor1; Valor2
true ? 'foo' ; 'bar'    //Retorna 'foo'
false ?  'foo';'bar'     //Retorna 'bar'




//Spread ...
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

function fn(x, y, z){}
var args = [0, 1, 2];
fn(...args);
 //Deletar algo
 delete algo;

 //Determinar tipo
 typeof algo;

 */

 Introdução a OO  08.27

