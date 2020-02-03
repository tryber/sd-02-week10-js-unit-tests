/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  if (typeof number !== 'number' || number <= 0) return [];
  const resultado = [];
  for (let i = 0; i < 2 ** number; i += 1) {
    resultado.push(i.toString(2));
    if (resultado[i].length < number) {
      resultado[i] = '0'.repeat(number - resultado[i].length) + resultado[i];
    }
  }
  return resultado;
}

module.exports = printBinary;
