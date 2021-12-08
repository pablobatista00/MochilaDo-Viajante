let cadastroPessoas = require('./cadastro');

/* 1-  MÉDIA DE PESSOAS QUE RESPONDERAM ÓTIMO */
function medIdade(array) {
  let idadeBoaAval = array.filter((cadastroPessoas) => {
    return cadastroPessoas.nota == 3;
  });
  let count = idadeBoaAval.reduce(
    (acumulator, value) => acumulator + value.idade,
    0
  );
  let med = count / idadeBoaAval.length;
  return med;
}

console.log(medIdade(cadastroPessoas));

/* 2 - QUANTIDADE DE PESSOAS QUE RESPONDERAM REGULAR */
function idade(array) {
  let boaAval = array.filter((cadastroPessoas) => {
    return cadastroPessoas.nota == 2;
  });
  return boaAval.length;
}

console.log(idade(cadastroPessoas));

/* 3 - PORCENTAGEM DE PESSOAS QUE RESPONDERAM BOM ENTRE TODOS */

function numPessoas(array) {
  let pessoas = array.filter((cadastroPessoas) => {
    return cadastroPessoas.nota == 2;
  });
  let med = (pessoas.length * 100) / cadastroPessoas.length;
  return med;
}

console.log(numPessoas(cadastroPessoas));