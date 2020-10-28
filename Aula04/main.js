"use strict";

const http = require("http");
const PORTA = 8080;
const alunos = require("./alunos");

const server = http.createServer(function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(alunos));
});

server.listen(PORTA, "localhost", () => {
  console.log(`Servidor rodando na porta ${PORTA}`);
});
