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
*/

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