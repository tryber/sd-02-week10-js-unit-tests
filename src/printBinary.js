/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  let valores = [];
  let value;
  let binary;
  if (!Number.isInteger(number) || (number === 0)) {
    return [];
  }
  for (let i = 0; i < Math.pow(2, number); i += 1) {
    binary = i.toString(2);
    value = ((new Array(number + 1).join('0')) + binary).slice(-number);
    valores[i] = value;
  }
  return valores;
}

module.exports = printBinary;
