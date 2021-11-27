let conta = {
    numeroConta: 0,
    tipoConta: "",
    saldo: 0,
    titular: "",
  };
  
  function Conta(numeroConta, tipoConta, titular, saldo) {
    (this.numeroConta = numeroConta), 
    (this.tipoConta = tipoConta), 
    (this.titular = titular),
     (this.saldo = saldo);
  }
  
  let listadasContas = [];
  
  listadasContas.push(new Conta(5486273622, "CC", "Abigael Natte", 27771));
  listadasContas.push(new Conta(1183971869, "CP", "Ramon Connell", 8675));
  listadasContas.push(new Conta(9582019689, "CP", "Jarret Lafuente", 27363));
  listadasContas.push(new Conta(1761924656, "CP", "Ansel Ardley", 32415));
  listadasContas.push(new Conta(7401971607, "CP", "Jacki Shurmer", 18789));
  listadasContas.push(new Conta(630841470, "CC", "Jobi Mawtus", 28776));
  listadasContas.push(new Conta(4223508636, "CC", "Thomasin Latour", 2177));
  listadasContas.push(new Conta(185979521, "CP", "Lonnie Verheijden", 25994));
  listadasContas.push(new Conta(3151956165, "CC", "Alonso Wannan", 7601));
  listadasContas.push(new Conta(2138105881, "CP", "Bendite Huggett", 33196));
  
  let bank = {
    clientes: listadasContas,
    consultarCliente: (titular) => 
    {
      for (let i = 0; i < listadasContas.length; i++) 
      {
        if (listadasContas[i].titular == titular) 
        {
          return listadasContas[i];
        } else 
            {
                return "Cliente Não encontrado";
            }
      }
    },
    deposito: (titular, dinheiro) => {
      for (let i = 0; i < listadasContas.length; i++) 
      {
        if (listadasContas[i].titular == titular)
         {
            listadasContas[i].saldo += dinheiro;
          return "Depósito Concluido com sucesso. Seu saldo é de: " + listadasContas[i].saldo;
        } else 
        {
          return "Não encontrado";
        }
      }
    },
    saque: (titular, dinheiro) => 
    {
      for (let i = 0; i < listadasContas.length; i++)
       {
        if (listadasContas[i].titular == titular) 
        {
          if (listadasContas[i].saldo < dinheiro)
           {
            return "Saldo insuficiente, refaça a operação! ";
          } else 
          {
            listadasContas[i].saldo -= dinheiro;
            return "Saque realizado! Seu novo saldo é de : " + listadasContas[i].saldo;
          }
        } else 
        {
          return "Não encontrado";
        }
      }
    },
  };

  bank.deposito("Abigael Natte", 100000);
  console.log(listadasContas[0]);