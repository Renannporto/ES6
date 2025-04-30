"use strict";

// Array de alunos com nome e nota
var alunos = [{
  nome: "Renan",
  nota: 7
}, {
  nome: "Maria",
  nota: 5
}, {
  nome: "Pedro",
  nota: 8
}, {
  nome: "Ana",
  nota: 6
}, {
  nome: "Carlos",
  nota: 4
}];

// Função para filtrar alunos com nota >= 6
function filtrarAprovados(listaAlunos) {
  return listaAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
function exibirAprovados(alunosAprovados) {
  console.log("Alunos aprovados:");
  alunosAprovados.forEach(function (aluno) {
    console.log("".concat(aluno.nome, " - Nota: ").concat(aluno.nota));
  });
  console.log("Total de aprovados: ".concat(alunosAprovados.length));
}

// Executa as funções
var aprovados = filtrarAprovados(alunos);
exibirAprovados(aprovados);