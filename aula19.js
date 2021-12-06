const arquivos = [
    {
        "sexo": "F",
        "nome": "Abigael Natte",
        "altura": 1.20
    },
    {
        
        "sexo": "M",
        "nome": "Ramon Connell",
        "altura": 1.8
    },
    {
        
        "sexo": "M",
        "nome": "Jarret Lafuente",
        "altura": 1.68
    },
    {
        
        "sexo": "F",
        "nome": "Ansel Ardley",
        "altura": 1.39
    },
    {
        
        "sexo": "F",
        "nome": "Jacki Shurmer",
        "altura": 1.49
    },
    {
        
        "sexo": "M",
        "nome": "Jobi Mawtus",
        "altura": 1.97
    },
    {
        
        "sexo": "M",
        "nome": "Thomasin Latour",
        "altura": 1.06
    },
    {
        
        "sexo": "F",
        "nome": "Lonnie Verheijden",
        "altura": 1.20
    },
    {
        
        "sexo": "M",
        "nome": "Alonso Wannan",
        "altura": 1.6
    },
    {
        
        "sexo": "F",
        "nome": "Bendite Huggett",
        "altura": 1.48
    }
  ]
  
  var byaltura = arquivos.slice(0);
  byaltura.sort(function(a,b) {
      return a.altura - b.altura;
  });
  
  console.log("Menor altura é: "+ byaltura[0].altura + " e a maior altura é: "+ byaltura[9].altura);
  
  var bysexo = arquivos.slice(0);
  bysexo.sort(function(a,b) {
      return a.bysexo - b.bysexo;
  });
  
  Altura=0
  contador=0
  contador2=0
  for (var i in bysexo) {
        if (bysexo[i].sexo == "F") {
            Altura+=bysexo[i].altura
          contador++
        
      }  
      else if   (bysexo[i].sexo == "M")  {
          contador2++
      }            
  };
  mediaalt=Altura/contador
  console.log("A media de Altura das mulheres é " +mediaalt)
  
  console.log("O numero de Homens é : "+contador2)
  
  