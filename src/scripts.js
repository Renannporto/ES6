// Array de alunos com nome e nota
const alunos = [
    { nome: "Renan", nota: 7 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 8 },
    { nome: "Ana", nota: 6 },
    { nome: "Carlos", nota: 4 }
];

  // Função para filtrar alunos com nota >= 6
function filtrarAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
}

function exibirAprovados(alunosAprovados) {
    console.log("Alunos aprovados:");
    alunosAprovados.forEach(aluno => {
        console.log(`${aluno.nome} - Nota: ${aluno.nota}`);
    });
    console.log(`Total de aprovados: ${alunosAprovados.length}`);
}

  // Executa as funções
const aprovados = filtrarAprovados(alunos);
    exibirAprovados(aprovados);
