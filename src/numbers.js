/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(...params) {
  if(params.length !== 0) {
    const isNumber = !params.some(el => !(typeof el === 'number'));
    return isNumber;
  }
  return false;
}

module.exports = numbers;
