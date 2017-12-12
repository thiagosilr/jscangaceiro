class NegociacaoController {
	Adicionar(event) {
		event.preventDefault();

		// Obtem os dados do formulário
		let $ = document.querySelector.bind(document);
		let campoData = $('#data');
		let campoQuantidade = $('#quantidade');
		let campoValor = $('#valor');

		console.log(campoData.value);
		console.log(parseInt(campoQuantidade.value));
		console.log(parseFloat(campoValor.value));

		console.log('Ação executada');
	}
}