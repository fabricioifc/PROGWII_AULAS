const numeros = [1, 5, 3, 5, 6, 3];

// for

// while
// do..while
// for..in
// for..of
// foreach
// map

// let soma = 0;
// for (let i = 0; i < numeros.length; i++) {
//   const item = numeros[i];
//   soma += item;
// }
// console.log(soma);

// let soma = 0;
// let contador = 0;
// while (numeros.length > contador) {
//   soma += numeros[contador];
//   contador++;
// }

// console.log(soma);

// let soma = 0;
// let contador = 0;
// do {
//   soma += numeros[contador];
//   contador++;
// } while (numeros.length > contador);
// console.log(soma);

// let soma = 0;
// for (const i in numeros) {
//   const item = numeros[i];
//   console.log(i, item);

//   soma += item;
// }
// console.log(`Soma = ${soma}`);

// let soma = 0;
// for (const item of numeros) {
//   //   const item = numeros[item];
//   soma += item;
// }
// console.log(`Soma = ${soma}`);

// let soma = 0;
// numeros.forEach((item) => {
//   soma += item;
// });
// console.log(`Soma = ${soma}`);

// criando um novo array com o dobro de cada número, se for número par
// const dobro = numeros.map(function (item) {
//   return item % 2 == 0 ? item * 2 : item;
// });

// console.log(numeros, dobro);

// somar com reduce #1
// const soma = numeros.reduce(somar);
// console.log(`Soma com Reduce = ${soma}`);

// somar com reduce #2
// function somar(acumulador, item) {
//   return acumulador + item;
// }
// const soma = numeros.reduce(somar, 0);
// console.log(`Soma com Reduce = ${soma}`);

const produtos = [
  { nome: "Motorola Moto E", valor: 1200, cor: "azul" },
  { nome: "Xiaomi Redmi", valor: 2300, cor: "prata" },
  { nome: "IPhone 11", valor: 5900, cor: "prata" },
];

// somar todos os produtos
// const soma = produtos
//   .filter(function (item) {
//     return item.cor === "prata";
//   })
//   .reduce(function (acc, produto) {
//     return acc + produto.valor;
//   }, 0);

// console.log(soma);

// somar todos os produtos da cor prata
// const soma = produtos
//   .filter(function (item) {
//     return item.cor === "prata";
//   })
//   .reduce(function (acc, produto) {
//     return acc + produto.valor;
//   }, 0);

// console.log(soma);
