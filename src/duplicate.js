/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  const obj = {};
  params.forEach((elemento) => {
    obj[elemento] = elemento;
  });
  if ((Object.keys(obj).length !== params.length) && (params.length !== 1)) return true;
  return false;
}

module.exports = duplicate;
