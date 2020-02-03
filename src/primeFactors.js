/*
  A função primeFactors recebe um número inteiro ${number}
  e retorna uma lista com todos os fatores primos desse parâmetro

  Por exemplo:

  - os fatores primos para o número 15 são [3, 5], pois:
    1) 3 * 5 = 15
    2) ambos 3 e 5 são números primos
  - os fatores primos para o número 9 são [3, 3], pois:
    1) 3 * 3 = 9
    2) 3, que aparece duas vezes, é um número primo
  - os fatores primos para o número 12 são [2, 2, 3], pois:
    1) 2 * 2 * 3 = 12
    2) 2, que aparece duas vezes, e 3 são números primos

  Para mais informações acerca de fatores primos, acesse esta página:
    -> https://pt.wikipedia.org/wiki/Fator_primo
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
