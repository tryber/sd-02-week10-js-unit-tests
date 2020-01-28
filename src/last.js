/* eslint no-unused-vars: ["error", { "args": "none" }] */
/*
  A função last deve retornar o último elemento contido no parâmetro ${param}
  O parâmetro ${param} pode ser de qualquer tipo
*/

function last(...param) {
  if (arguments.length > 1) {
    return param.slice(-1).toString()
  }
  const lastParam = arguments[arguments.length - 1];
  return lastParam[lastParam.length - 1] || lastParam;
}

module.exports = last;