/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  let arrResp = [];
  if (typeof number !== 'number' || number <= 0) return arrResp;
  maxValue = (2 ** number);
  for (let i = 0; i < maxValue; i += 1){
    arrResp.push(i.toString(2));
  };
  for (let i = 0; i < arrResp.length; i +=1){
    if(arrResp[i].length < number){
      arrResp[i] = '0'.repeat(number - arrResp[i].length) + arrResp[i];
    };
  };
  return arrResp;
};
module.exports = printBinary;
