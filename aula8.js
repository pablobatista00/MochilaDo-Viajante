// let idade = 15;

// if(idade > 18){

//     console.log("De maior")
// }else if(idade == 18){
//     console.log("18 anos")
// }else{
//     console.log("de menor")
// }

// switch(idade){
//     case 15:
//         console.log("idade igual a 15");
//     break;

//     case 16:
//         console.log("idade igual a 16");
//     break;

//     default:
//         console;log("Nenhuma das cases");

// }

// let status = true;

// if(status){
//     console.log("O valor é true - verdadeiro")
// }else{
//     console.log("O valor é false- falso")
// }

// let linguagem ="javascript";
//     if(linguagem=="javascript"){
//         console.log("Estou aprendendo");
//     }else{
//         console.log("Aprenderei mais tarde");
//     }



    function podeSubir(altura, acompanhada) {
        if (altura >= 1.40 && altura <= 2) {
            console.log("Acesso autorizado");
        } else if (altura >= 1.20 && altura < 1.4 && acompanhada == "sim") {
            console.log("Acesso autorizado somente com acompanhante");
        } else {
            console.log("Acesso Negado");
        }
    }
    podeSubir(1.1,"sim");
    podeSubir(1.3,"nao");
    podeSubir(1.7,"nao");
    podeSubir(1.3,"sim");
    podeSubir(2.5,"nao");
    
