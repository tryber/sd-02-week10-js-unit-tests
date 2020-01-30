/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  if (typeof number !== 'number') return [];
  if (number <= 0) return [];
  maxValue = (2 ** number);
  const arrResp = [];
  for (let i = 0; i < maxValue; i += 1) {
    arrResp.push(i.toString(2));
    if (arrResp[i].length < number){
      arrResp[i] = '0'.repeat(number - arrResp[i].length) + arrResp[i];
  }
}
  return arrResp;
}
module.exports = printBinary;
