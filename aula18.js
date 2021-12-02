function loopdepares(numero0){
    for (let index = 0; index <=100; index++) {
        if ((numero0+index)%2==0) {
            console.log("O numero "+(numero0+index)+" é par!")
        }
        
    }
};
loopdepares(2);

function loopdeimpares(numero1){
    for (let index = 0; index <=100; index++) {
        if ((numero1+index)%2!=0) {
            console.log("O numero "+(numero1+index)+" é impar!")
        }
        
    }
};
loopdeimpares(2);

function soma(x) {
    let result = 0;

    for (let i = x; i > 0; i--) {
        result += i;
    }

    console.log(result);
}
soma(3)

function newarray(numero3){
    matr=[];
    for (let i = 1; i <= numero3; i++) {
        
        matr[i-1] = i;
    }
    console.log(matr)
}

newarray(5)

function split(palavra){
    palav=[]
    for (let index = 0; index < palavra.length; index++) {
        palav[index]=palavra[index]
        
    }
    console.log(palav)
}
split("paralelepipedo")

function moverZeros(seqpalavras){

    let filtro1 = seqpalavras.filter(function(item){
        return item === 0;
    })
   
    let filtro2 = seqpalavras.filter(function(item){
        return item!==0;
    })
    matr99=[]
    matr99 = filtro2.concat(filtro1)
    console.log(matr99)
}
moverZeros([false,1,0,1,2,0,1,3,"a"])

function arrayHandler(arr1,arr2){

    for (let index = 0; index < arr1.length; index++) {
        
        console.log("Eu sou "+arr1[index]+" e eu sou "+arr2[index])
        
    }

}
arrayHandler([1,2,3], ["o","l","a"])


function arrayObjects(x) {
    let array = [];

    for (let i = 1; i <= x; i++) {
        array.push({valor:[i]});
    }

    console.log(array);
}

arrayObjects(5)

function arrayObjectsTwo(x, y) {
    let array = [];

    for (let i = 1; i <= x; i++) {
        array.push({ [y] :[i]});
    }

    console.log(array);
}
arrayObjectsTwo(3, "tchau") 
