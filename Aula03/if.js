// revisão
// variáveis, funções

function somar(a, b) {
  return a + b;
}

const subtrair = (a, b) => a - b;

const multiplicar = function (a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error(`(${a}, ${b}) não são números!`);
  }
  return a * b;
};

(function (a, b) {
  console.log("Iniciando...");
  try {
    const soma = somar(a, b);
    const subtracao = subtrair(a, b);
    const multiplicacao = multiplicar(a, b);

    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Finalizando...");
  }
})("10a", 5);
