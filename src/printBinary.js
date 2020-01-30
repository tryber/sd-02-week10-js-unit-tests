/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  let arr = [];
  if (number != 0 || typeof number !== 'number' ) {
    for (let i = 0; i < Math.pow(2, number); i += 1) {
      arr.push(i.toString(2));
    }
    arr = arr.map((Element) => {
      if (Element.length < number) {
        return Element = '0'.repeat(number - Element.length) + Element;
      } return Element;
    });
  } return arr;
}
console.log(printBinary('4'));
module.exports = printBinary;
// for( let i = 0 ; i <= Math.pow(2, number) ; i+= 1) {

// }