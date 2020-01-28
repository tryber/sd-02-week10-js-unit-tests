/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  const resposta = [];
  if (!number) return resposta;
  const fatorial = (n) => n === 0 || n === 1 ? n : n * fatorial(n - 1);
  const nColunas = number;
  const linhas = fatorial(number);
}


module.exports = printBinary;
