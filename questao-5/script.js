function sortearNumeros() {
	const cartela = [11, 28, 35, 74, 26, 17];
	const numerosSorteados = [];
	let numerosEncontradosNaCartela = 0;

	while (numerosEncontradosNaCartela < cartela.length) {
		let numero = Math.floor(Math.random() * 75) + 1;

		if (numerosSorteados.indexOf(numero)) {
			numerosSorteados.push(numero);
		}

		if (cartela.indexOf(numero) !== -1) {
			numerosEncontradosNaCartela++;
		}
    
		console.log(`Número sorteado: ${numero}`);
	}
	console.log("Parabéns, você ganhou!");
}

sortearNumeros();
