/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(params) {
  return Array.from(arguments)
  .every(element => typeof element === 'number');
}
module.exports = numbers;
