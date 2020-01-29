/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  const resposta = [];
  if (!number) return resposta;
  const nColunas = number;
  const linhas = 2**number;
}


module.exports = printBinary;
