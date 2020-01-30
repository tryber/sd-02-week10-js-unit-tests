/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function criaArray(array, number) {
  for (let i = 0; i < 2 ** number; i += 1) {
    array.push(i.toString(2));
  }
  return array;
}
function mapBinario(arr, number) {
  const controle = arr.map((numeroArray) => {
    if (numeroArray.length < number) {
      numeroArray = '0'.repeat(number - numeroArray.length) + numeroArray;
    } return numeroArray;
  });
  return controle;
}

function printBinary(number) {
  let arr = [];
  if (number !== 0 && typeof number === 'number') {
    arr = criaArray(arr, number);
    return mapBinario(arr, number);
  } return arr;
}

module.exports = printBinary;
