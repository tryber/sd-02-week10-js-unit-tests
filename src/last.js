/*
  A função last deve retornar o último elemento contido no parâmetro ${param}
  O parâmetro ${param} pode ser de qualquer tipo
*/

function last(param) {
  let last = arguments[arguments.length - 1];
  return last[last.length - 1] || last;
}

module.exports = last;
