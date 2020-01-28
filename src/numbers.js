/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(...params) {
  const isNumber = !params.some(el => !(typeof el === 'number'));
  return isNumber;
}

module.exports = numbers;
