/*
  A função numbers recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se todos os parâmetros forem do tipo Number e `false` caso contrário
*/

function numbers(...params) {
  let eNum = true;
  params.forEach((numero) => {
    if (typeof (numero) !== 'number') {
      eNum = false;
    }
  });
  return eNum;
}

module.exports = numbers;
