let numeros = [0,2,4,6,8,10];

let impares = numeros.map(function(item){
    // console.log(item);
    return item+1;
});

console.log(impares);

let nomes=['Abel','Maria','Marcos','Pedro','Maria','Juca']

let filtronome = nomes.filter(function(item){
    return item =='Maria';
});
console.log(filtronome);

let numeros2 = [1,5,9,3,7];

let numerosformat = numeros2.reduce(function(acumulador, item) {
    return acumulador + ' - ' + item;
});
console.log(numerosformat);


var animais = ['Macaco', 'Leao', 'Baleia'];
 animais.forEach(
 function(animals){
 console.log("O Nome do animal é : " + animals);
 })