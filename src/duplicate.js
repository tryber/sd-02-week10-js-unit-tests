/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const findDuplicates = params.filter((elem, pos, arr) =>
    arr.indexOf(elem) !== pos;
  );
  return (findDuplicates.length === 0) ? 'false' : 'true';
}

module.exports = duplicate;
