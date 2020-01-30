const primeFactors = require('../src/primeFactors');
const assert = require('assert');

const expectativa = primeFactors(40);

let resultado = [2, 2, 2, 5];

assert.deepStrictEqual(expectativa, resultado);

resultado = 'Error: Valor não inteiro.';

assert.throws(() => { primeFactors(3.15) }, resultado);
// A função recebe um inteiro e retorna a lista com os fatores primos desse número
// Se o parâmetro recebido for um valor não inteiro um erro deve ser lançado
