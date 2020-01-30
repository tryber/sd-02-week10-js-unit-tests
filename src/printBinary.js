/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  if (number === 0 || typeof number !== 'number') {
    return [];
  }

  const lista = ['0', '1'];

  for (let i = 1; i < number; i += 1) {
    const tamanhoLista = lista.length;

    for (let j = 0; j < tamanhoLista; j += 1) {
      lista.push(`${lista[j]}0`);
      lista.push(`${lista[j]}1`);
    }
  }

  return lista.slice(lista.length - 2 ** number);
}

module.exports = printBinary;
