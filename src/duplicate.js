/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  return params.some((element, index) => params.indexOf(element) !== index);
}

module.exports = duplicate;

/* Another solution

function duplicate(...params) {
const sorted = params.sort();
for (let i = 0; i < sorted.length; i++) {
  if (sorted[i] == sorted[i + 1]) {
    return true;
  } else if (i == sorted.length - 1) {
    return false
  }
 }
}
*/