function microondas(alimento, tempo) {
   if (alimento == "pipoca") {
        if(tempo>= 10 && tempo <=20 ){
            console.log("Prato Pronto, bom apetite!")
        } else if(tempo < 10 ){
            console.log("tempo insuficiente")
        } else if(tempo>20 && tempo <= 30 ){
            console.log("Sua comida queimou!")

        } else if(tempo > 30){
            console.log("Kabumm")
        }

    } else if(alimento == "macarrao"){
        if(tempo>= 8 && tempo <=16 ){
            console.log("Prato Pronto, bom apetite!")
        } else if(tempo < 8 ){
            console.log("tempo insuficiente")
        } else if(tempo>16 && tempo <= 24 ){
            console.log("Sua comida queimou!")

        } else if(tempo > 24){
            console.log("Kabumm")
        }
    } else if(alimento == "carne"){
       
        if(tempo>= 15 && tempo <=30 ){
            console.log("Prato Pronto, bom apetite!")
        } else if(tempo < 15 ){
            console.log("tempo insuficiente")
        } else if(tempo>30 && tempo <= 45 ){
            console.log("Sua comida queimou!")

        } else if(tempo > 45){
            console.log("Kabumm")
        }
    } else if(alimento == "feijao"){
        
        if(tempo>= 12 && tempo <=24 ){
            console.log("Prato Pronto, bom apetite!")
        } else if(tempo < 12 ){
            console.log("tempo insuficiente")
        } else if(tempo>24 && tempo <= 36 ){
            console.log("Sua comida queimou!")

        } else if(tempo > 36){
            console.log("Kabumm")
        }

    } else if(alimento == "brigadeiro"){
        
        if(tempo>= 8 && tempo <=16 ){
            console.log("Prato Pronto, bom apetite!")
        } else if(tempo < 8 ){
            console.log("tempo insuficiente")
        } else if(tempo>16 && tempo <= 24 ){
            console.log("Sua comida queimou!")

        } else if(tempo > 24){
            console.log("Kabumm")
        }

    }
    else{
        console.log("Prato Inexistente")
    }
    
}

microondas("pipoca",12)
microondas("pipoca",8)
microondas("pipoca",25)
microondas("pipoca",40)
microondas("popoca",40)

microondas("macarrao",10)
microondas("macarrao",6)
microondas("macarrao",19)
microondas("macarrao",28)
microondas("macaron",12)

microondas("carne",17)
microondas("carne",8)
microondas("carne",32)
microondas("carne",49)
microondas("carny",40)

microondas("feijao",12)
microondas("feijao",8)
microondas("feijao",26)
microondas("feijao",48)
microondas("feiao",40)

microondas("brigadeiro",12)
microondas("brigadeiro",5)
microondas("brigadeiro",17)
microondas("brigadeiro",27)
microondas("brigad",40)