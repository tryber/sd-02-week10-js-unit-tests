/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  let array = [];
  if (typeof number !== typeof 1 || number === 0) {
    return array;
  }
  const allBinaries = (2 ** number);
  for (let i = 0; i < allBinaries; i += 1) {
    array.push(i.toString(2));
  }
  array = array.map((binary) => {
    while (binary.length < number) {
      binary = `0${binary}`;
    }
    return binary;
  });

  return array;
}

module.exports = printBinary;
