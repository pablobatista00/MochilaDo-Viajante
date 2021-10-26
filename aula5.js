// Mesa de Trabalho Aula 05 

// Exercicio 1
function polegtocent(a){
    centimetros = a*2.54 ;  
    console.log(a+" polegadas em centimetros é "+centimetros);
}

polegtocent(2)

// Exercicio 2 

function conversorurl(url){
    console.log("http://www."+url+".com.br");
}
conversorurl("google")

// Exercicio 3

function fraseexclamacao(frase){
    console.log(frase+"!");
}
fraseexclamacao("Hoje é dia 26 de outubro");

// Exercicio 4
function idadecachorro(idade){
    idadecachorro=idade*7;
    console.log("Convertendo a idade de "+idade+ " anos humanos em anos de cachorro temos "+idadecachorro+" anos" )
}
idadecachorro(10);

// Exercicio 5 
function calchoratarbalho(salarios){
    horavalor=salarios/160 
    console.log("O valor da hora de trabalho é de "+horavalor+" reais");
}
calchoratarbalho(1600)

// Exercicio 6
function calculadoraimc(peso,altura){
    imc=peso/(altura*altura)
    console.log("o seu IMC é de "+imc)
}
calculadoraimc(90,1.80)

// Exercicio 7
function convertupper(fraseminusc){
    console.log(fraseminusc.toUpperCase())
}
convertupper("hello world")

// Exercicio 8 

function tipododado(a){
    console.log(typeof(a))
}
tipododado("teste")

// Exercicio 9 
function calccircunf(raio){
    console.log("o valor da circunferecia é "+raio*raio*Math.PI)
}
calccircunf(10)