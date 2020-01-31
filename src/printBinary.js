/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

 // solução Miguel comentada - raciocínio de análise combinatória
function printBinary(number) {
  const binaries = ['0', '1']; // array de números que serão combinados
  for (let i = 1; i < number; i += 1) { // loop para redefinir o valor do tamanho da lista
    const binariesLength = binaries.length;
    for (let j = 0; j < binariesLength; j += 1) {
      // loop nos elementos da lista que são inseridos acompanhados de 0 e 1
      binaries.push(`${binaries[j]}0`);
      binaries.push(`${binaries[j]}1`);
    }
  }
  // return binaries.splice(binaries.length - (2 ** number));
  return binaries.filter(element => element.length === number);
  // filtra somente os números com o número de dígitos desejado
}

module.exports = printBinary;
