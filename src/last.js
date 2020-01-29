/* eslint no-unused-vars: ["error", { "args": "none" }] */
/*
  A função last deve retornar o último elemento contido no parâmetro ${param}
  O parâmetro ${param} pode ser de qualquer tipo
*/

function last(...arguments) {
  const lastParam = arguments[arguments.length - 1];
  if (arguments.length !== 1) return lastParam;
  return lastParam[lastParam.length - 1] || lastParam;
}
console.log (last ('joao'));
module.exports = last;
