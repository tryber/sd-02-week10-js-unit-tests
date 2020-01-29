/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/

const integerNumber = (num) => {
  const lista = [];
  let numAtual = num;
  for (i = 2; i <= numAtual; i += 1) {
    if (numAtual % i === 0) {
      lista.push(i);
      numAtual /= i;
      i -= 1;
    }
  }
  return lista;
};

function primeFactors(number) {
  if (Number.isInteger(number)) {
    return integerNumber(number);
  }
  return `${number} is not a integer number`;
}

module.exports = primeFactors;
