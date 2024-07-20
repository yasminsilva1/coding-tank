const nome = prompt("Digite o seu nome: ");
const notaInput = prompt("Digite a sua nota: ");
const nota = Number(notaInput);
const notaMinima = 8;

function dadosDoCandidato() {
	if (nota >= notaMinima) {
		console.log(`Parabéns ${nome}, você foi aprovado!`);
	} else {
		console.log(`Olá ${nome}! Infelizmente você foi reprovado.`);
	}
}

function validarDadosDoCandidato() {
	if (notaInput === "" || isNaN(nota)) {
		alert("Dados inválidos. Favor, revise os dados informados.");
    return false;
	}
  return true;
}

if (validarDadosDoCandidato()) {
  dadosDoCandidato();
}
