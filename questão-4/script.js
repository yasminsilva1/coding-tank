function escreverNoConsole() {
	for (let i = 1; i <= 100; i++) {
		console.log(i);
		if (i % 5 === 0) {
			console.log("Ada");
		}
	}
}

escreverNoConsole();
