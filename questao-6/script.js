const alunos = [
	{ nome: "Pedro", turma: "A", idade: 14 },
	{ nome: "Maria", turma: "A", idade: 12 },
	{ nome: "Marcos", turma: "B", idade: 15 },
	{ nome: "Michel", turma: "A", idade: 13 },
	{ nome: "Ana", turma: "B", idade: 11 },
	{ nome: "Bruno", turma: "B", idade: 10 },
];

function maisVelhoTurmaA() {
	let maisVelho = alunos[0];

	for (let i = 0; i < alunos.length - 1; i++) {
		if (alunos[i].turma === "A" && alunos[i].idade > maisVelho.idade) {
			maisVelho = alunos[i];
		}
	}

	return `Nome: ${maisVelho.nome}, Idade: ${maisVelho.idade}`;
}

function mediaIdadeAlunos() {
	let somaIdades = 0;
	let totalAlunos = alunos.length;

	for (let i = 0; i < totalAlunos; i++) {
		somaIdades += alunos[i].idade;
	}

	let media = somaIdades / totalAlunos;
	return media;
}

console.log(maisVelhoTurmaA());
console.log(mediaIdadeAlunos());
