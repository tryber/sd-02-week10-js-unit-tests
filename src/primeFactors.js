/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/
function numeroPrimo(num) {

  if (typeof num !== "number") {
      return false;
  }

  if (num == 2) {
      return true;
  }

  if (num % 2 == 0) {
      return false;
  }

  if (num !== 1) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  } else {
      return false;
  }
}

const integerNumber = (num) => {
  const lista = [];
  let numAtual = num;
  for (i = 2; i <= numAtual; i += 1) {
    if (numAtual % i === 0 && numeroPrimo(i)) {
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
