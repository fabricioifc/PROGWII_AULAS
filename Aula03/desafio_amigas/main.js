(function () {
  ajustarTotal();

  const botao = document.querySelector("button.adicionar");
  botao.addEventListener("click", function (event) {
    event.preventDefault();

    document
      .querySelector("table tbody")
      .insertAdjacentElement("beforeend", criarLinha());

    ajustarTotal();
  });
})();

function ajustarTotal() {
  const idades = buscarLinhasComIdade();
  const resultado = getIdadesFromArray(idades);
  const total = getSomaIdades(resultado);
  console.log(total);

  document.querySelector("table tfoot td.total").textContent = total;
}

function criarLinha() {
  const tabela = document.querySelector("table tbody");
  const tr = document.createElement("tr");
  tr.setAttribute("class", "pessoa");
  tr.appendChild(criarColuna("nome", "Fulano"));
  tr.appendChild(criarColuna("idade", getRandomInt()));
  return tr;
}

function criarColuna(classe, texto) {
  let td = document.createElement("td");
  td.setAttribute("class", classe);
  td.textContent = texto;
  return td;
}

function buscarLinhasComIdade() {
  const idades = document.querySelectorAll(
    "table tbody tr.pessoa td:nth-of-type(2)"
  );
  return converterNodeListParaArray(idades);
}

function converterNodeListParaArray(lista) {
  return Array.from(lista);
}

/**
 * Convertendo para Array
 */
function getIdadesFromArray(idades) {
  return idades
    .map((td) => {
      let idade = parseInt(td.textContent);
      return idade;
    })
    .filter((idade) => idade >= 18);
}

function getSomaIdades(idades) {
  return idades.reduce((total, idade) => {
    return total + idade;
  }, 0);
}

function getRandomInt() {
  min = Math.ceil(10);
  max = Math.floor(90);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
