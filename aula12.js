const alice = [23, 82, 46];
const bob = [45, 8, 32];

function ganhador(a,b){
let p1 = 0;
let p2=0;

for (let i= 0; i < a.length; i++) {
    if(a[i]>b[i]){
        p1+=1;
    }
    else{
        p2+=1;
    }
}

if(p1>p2){
    return("O primeiro participante");
}
else if(p1<p2){
    return ("O segundo participante");
}
else{
    return ("Ninguem, houve empate");
}

}

console.log("Ganhador: "+ganhador(alice, bob));