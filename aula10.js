
// 1º
function imprimirInverso(array)
 {  
    console.log(array.reverse());
 }
   imprimirInverso(["7","8","9"]);
   
   //2º
   
   function inverter(array)
   {
    let inverso = array.reverse();
    console.log(inverso);
   }
   
   inverter(["quatro","cinco","seis"])
   
   // 3º
   
   function somaArray(array)
   {
     
     console.log(array[0]+array[1]+array[2])
   
   }
   somaArray([9,10,11]);
   
   // 4º
function somarPalavras(palavras){
    let palavraSomada =  palavras[0]
    for (let index = 1; index < palavras.length; index++) {
        palavraSomada += ' ' + palavras[index];
    }
    console.log(palavraSomada)
}

somarPalavras(['Feliz','Aniversario','!'])


// 5º

var catalogosA = ["star wars", "matrix","mr. robot", "o preço do amanhã",  "a vida é bela"]
function capitalizar(position){
    return position.toUpperCase()
}

console.log(capitalizar(catalogosA[1]))

// 6º
var catalogosB = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

function combinarArrays(array1,array2){
    return arraySomados = array1.concat(array2)
    // console.log(arraySomado)
}

arraySomado = combinarArrays(catalogosA,catalogosB)

console.log(arraySomados)

//7º
var removidos = arraySomados.pop()



//8º

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

for (let index = 0; index < asiaScores.length; index++) {
    console.log(asiaScores[index] == euroScores[index] ? asiaScores[index]+' é igual ' + euroScores[index]  : asiaScores[index]+' é diferente ' + euroScores[index] )
    
}