/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(...params) {
  if (params.every(Element => typeof (Element) === 'number')) {
    return true;
  }
  return false;
}

module.exports = numbers;
