const assert = require('assert');
const primeFactors = require('../src/primeFactors');

// A função recebe um inteiro e retorna a lista com os fatores desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado

const expectWithPrimers = primeFactors(109200);

assert.deepStrictEqual(expectWithPrimers, [ 2, 2, 2, 2, 3, 5, 5, 7, 13 ], 'Deu ruim, tenta de novo');
