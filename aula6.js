

function adicionar(a,b){
    soma=a+b
    return soma
}


function subtracao(c,d){
    subtrac=c-d
    return subtrac
}


function multiplicacao(e,f){
    multiplic=e*f
    return multiplic
}


function divisao(g,h){
    divis=g/h
    return divis
}

function quadradodonumero(i){
    quadrado=multiplicacao(i,i)
    return quadrado
}

function mediadetresnumeros(j,k,l){
 media= divisao(adicionar(adicionar(j,k),l),3)
return media
}

function calculaPorcentagem(m,n){
    porc = multiplicacao(adicionar(0,divisao(n,100)),m)
    return porc
}

function geradordeporcentagem(o,p){
        geraporcent = multiplicacao(divisao(o,p),100)
        return geraporcent
    }


console.log ("-------------- Teste de Operações / Calculadora --------------")

console.log(adicionar(1,2))

console.log(subtracao(9,5))

console.log(multiplicacao(9,9))

console.log(divisao(81,9))

console.log(divisao(81,0))

console.log(quadradodonumero(11))

console.log(mediadetresnumeros(9,5,16))

console.log(calculaPorcentagem(150,10))

console.log(geradordeporcentagem(2,200))

