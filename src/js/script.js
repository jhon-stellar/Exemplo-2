//DECLARAÇÕES E VARIAVEIS
var nome ="fiap";
console.log(nome)

let idade =18;
console.log(idade)

const sobrenome ="Cidade";
console.log(sobrenome)
//undefined
let aula;
console.log(aula)
//null
let valor = null;
console.log(valor)

let exemplo1={};

let exemplo2=[];

//TIPOS VARIAVEIS
let exemplo3 = 10;
console.log(typeof exemplo3)

let exemplo4="aula"
console.log(typeof exemplo4)

let exemplo5 =true;
console.log(typeof exemplo5)

let exemplo6 =["huguinho","zezinho","luizinho"];
console.log(typeof exemplo6)

//CONVERÇÕES

//float => inteiro
let numFloat =123.456;
console.log(parseInt(numFloat))

//string => float
let numString ="567.891";
console.log(parseFloat(numString))

//float => string

let numFloat1 =663.112;
console.log(numFloat.toString());

let numInt=100;
console.log(numInt.toString())

//METODOS - PARTE-1

//LENGTH - VERIFICANDO O TAMANHO DA STRING

let frase ="O mundo da Tecnologia";
console.log(frase.length)

//indexOf - retorna um trecho de um texto

let texto = "Progamação Sustentavel"
console.log(texto.indexOf("p"))

//slice - retorna parte de um texto apontando o inicio e final

let info="processamento de ponta";
console.log(info.slice(0,22))

//OPERADORES ARITMÉTICOS

const num1 =10
const num2 =20

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

//OPERADORES LÓGICOS

const num3 =20;
const num4 =30;

console.log(num3 < num4)
console.log(num3 > num4)
console.log(num3 > num4 && num4 < 50) 
console.log(num3 > num4 || num4 > num3)
console.log(num3 == num4 || num4 <= num3)