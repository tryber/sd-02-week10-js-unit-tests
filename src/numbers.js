/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(...params) {
  const isANumber = params.every(param => typeof param === 'number');
  if (isANumber) {
    return true;
  }
  return false;
}
module.exports = numbers;
