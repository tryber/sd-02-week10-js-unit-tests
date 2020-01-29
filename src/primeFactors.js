/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

function primeFactors(number) {
  if (Number.isInteger(number)) {
    const lista = [];
    let numAtual = number;
    for (i = 2; i <= numAtual; i += 1) {
      if (numAtual % i === 0) {
        lista.push(i);
        numAtual /= i;
        i -= 1;
      }
    }
    return lista;  
  }
  return `${number} is not a integer number`;
}

module.exports = primeFactors;
