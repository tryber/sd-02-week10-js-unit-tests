/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */
function mape(arr, number) {
  const controle = arr.map((Element) => {
    if (Element.length < number) {
      const a = Element = '0'.repeat(number - Element.length) + Element;
      return a;
    } return Element;
  });
  return controle;
}
function printBinary(number) {
  let arr = [];
  if (number !== 0 || typeof number !== 'number') {
    for (let i = 0; i < 2 ** number; i += 1) {
      arr.push(i.toString(2));
    }
    arr = mape(arr, number);
  } return arr;
}
console.log(printBinary('4'));
module.exports = printBinary;
