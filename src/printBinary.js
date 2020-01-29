/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  let array = [];
  if (typeof number !== 'number' || number === 0) {
    return array;
  }
  const qt = (2 ** number) - 1;
  for (let i = 0; i <= qt; i += 1) {
    array.push(i.toString(2));
  }
  array = array.map((item) => {
    while (item.length < number) {
      item = `0${item}`;
    }
    return item;
  });

  return array;
}


module.exports = printBinary;
