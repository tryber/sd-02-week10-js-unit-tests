/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(...params) {
  for (let i = 0; i < params.length; i += 1) {
    for (let j = i + 1; j < params.length; j += 1) {
      if (params[i] === params[j]) {
        return true
      }
    }
  }

  return false
}

module.exports = duplicate;
