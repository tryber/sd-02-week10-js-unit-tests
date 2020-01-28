/*
  A função duplicate recebe uma lista de parâmetros (tamanho variável)
  e retorna `true` se existe algum elemento duplicado e `false` caso contrário
 */

function duplicate(arr) {
  const ajeitado = arr.sort();
  for (let i = 0; i < ajeitado.length; i++) {
    if (ajeitado[i] == ajeitado[i + 1]) {
      return true;
    } else if (i == ajeitado.length - 1) {
      return false
      
    }

    }
  }


module.exports = duplicate;

console.log(duplicate([1, 4, 5, 2, 8, 8]))

// function duplicate(...params) {
//   return params.some((elem, pos) => params.indexOf(elem) !== pos); 