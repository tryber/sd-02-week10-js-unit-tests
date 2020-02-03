/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores desse parâmetro
*/
function numeroPrimo(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
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
  if (!Number.isInteger(number)) {
    throw new Error('Just integers Numbers.');
  }
  return integerNumber(number);
}

module.exports = primeFactors;
