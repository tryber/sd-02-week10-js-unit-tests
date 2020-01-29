/*
  A função printBinary recebe um parâmetro inteiro ${number}
  e retorna uma lista com todos os números binários existentes com a quantidade ${number} de dígitos
 */

function printBinary(number) {
  const respostaEmColunas = [];
  if (!number) return respostaEmColunas;
  const nNumerosBi = 2 ** number;
  for (let i = 1; i <= number; i += 1) {
    respostaEmColunas.push(criarColuna(nNumerosBi, nNumerosBi / 2 ** i))
  }
  const resposta = [];
  for (let i = 0; i < nNumerosBi; i++) {
    let formarLinha = '';
    respostaEmColunas.forEach(Element => {
      formarLinha += Element[i];
    })
    resposta.push(formarLinha)
  }
  console.log(resposta)
}

function criarColuna(comprimento, intervalo) {
  let coluna = '';
  for (let i = 1; i <= comprimento; i += 0) {
    for (let j = 0; j < intervalo; j += 1) {
      coluna += '0'.repeat(1)
      i += 1;
    }
    for (let j = 0; j < intervalo; j += 1) {
      coluna += '1'.repeat(1)
      i += 1;
    }
  }
  return coluna
}

printBinary(3)

module.exports = printBinary;
