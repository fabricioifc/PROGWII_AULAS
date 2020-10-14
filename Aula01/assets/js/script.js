//document.write("OLá Mundo!");
// var notas = document.querySelectorAll('input[type="number"]')

var botao = document.getElementById("btnCalcular");
var resultado = document.querySelector("div.resultado");
var media = null;

botao.addEventListener("click", function (event) {
  this.setAttribute("disabled", "disabled");
  this.setAttribute("value", "Calculando...");

  setTimeout(() => {
    this.setAttribute("value", "Calcular Média");
    this.removeAttribute("disabled");

    var notas = document.querySelectorAll("input[type='number']");

    const erros = [...validarNota(notas[0]), ...validarNota(notas[1])];

    limparErros();
    if (erros.length > 0) {
      mostrarErros(erros);
      return;
    }

    var soma = 0;
    for (let i = 0; i < notas.length; i++) {
      const nota = notas[i];
      soma += parseFloat(nota.value);
    }
    media = (soma / notas.length).toFixed(2);

    resultado.innerHTML = `A média do aluno é: <strong>${media}</strong>`;
  }, 1000);
});

function isNumero(valor) {
  return !isNaN(valor);
}

function validarNota(nota) {
  var value = parseFloat(nota.value);
  let erros = [];

  if (!isNumero(value)) {
    erros.push({
      elemento: nota,
      mensagem: "Informe uma nota válida"
    });
  } else {
    if (value < 0 || value > 10) {
      erros.push({
        elemento: nota,
        mensagem: "Informe uma nota entre 0 e 10"
      });
    }
  }

  return erros;
}

function mostrarErros(erros) {
  erros.forEach((erro) => {
    var errorTag = erro.elemento.parentElement.querySelector("div.error");
    errorTag.insertAdjacentHTML("beforeend", `<p>${erro.mensagem}</p>`);
  });
}

function limparErros() {
  document.querySelectorAll("div.error").forEach(function (tag) {
    tag.innerHTML = "";
  });
}
