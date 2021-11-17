// for (let i = 0; i<=100; i++){
// 	if(i % 2 == 1){
// 		console.log(i);
// 	}
// }

// for (let i=0; i<=5; i++){
//     console.log("Ola Mundo")
// }

// let contador = 0;
// while(contador<=5){
//     console.log(contador)
//     contador++;
// }

// contei = 0;
// do{
//     console.log(contei);
//     contei++;
// }while (contei<=5);

let peliculas = ["star wars", "matrix","mr. robot", "o preço do amanhã",  "a vida é bela"]

function convertirAMayusculas(array){
      array[0] = array[0].toUpperCase()
      array[1] = array[1].toUpperCase()
      array[2] = array[2].toUpperCase()
      array[3] = array[3].toUpperCase()
      array[4] = array[4].toUpperCase()
      return array
    }

    convertirAMayusculas(peliculas);
    console.log(peliculas);

   let peliculasnovas = ["formigas"];

function pasajeDeElementos(array1,array2) {
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    }

 pasajeDeElementos(peliculasnovas,peliculas);
 console.log(peliculasnovas)

 const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
 const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
 let comparacionesAsiaEuropa = []
 function compararCalificaciones(asia, europa) {
     
      comparacionesAsiaEuropa[0] = asia[0] === europa[0]
      comparacionesAsiaEuropa[1] = asia[1] === europa[1]
      comparacionesAsiaEuropa[2] = asia[2] === europa[2]
      comparacionesAsiaEuropa[3] = asia[3] === europa[3]
 }

 compararCalificaciones(asiaScores,euroScores);
 console.log(comparacionesAsiaEuropa);

 let participanteA = [5,8,4,9,5];
 let participanteB = [8,7,8,6,8];
 let participanteC = [7,5,10,8,3];

function pontuacaoMedia(participante) {
    let soma = 0;
  
    for (let i = 0; i < participante.length; i++) {
      soma += participante[i]
    }
    console.log(media = soma / participante.length);
  }
  pontuacaoMedia(participanteA);
  pontuacaoMedia(participanteB);
  pontuacaoMedia(participanteC);

  function pontuacaoMaior(participante1,participante2) {

    let maior = 0;
    for (let i = 0; i < participante1.length; i++) {
      if (participante1[i] > participante2[i] && participante1[i] >participante1[i-1] ) {
        maior = participante1[i];
        
      }
      else if(participante2[i] >participante2[i-1]){
        maior= participante2[i];
      }
      else{
        maior= participante2[i-i]
      }
    }
    console.log(maior)
  }
  
 pontuacaoMaior(participanteA,participanteC);
  