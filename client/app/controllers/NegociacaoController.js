class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._CampoData = $('#data');
		this._CampoQuantidade = $('#quantidade');
		this._CampoValor = $('#valor');
	}

	Adicionar(event) {
		event.preventDefault();

		console.log(this._CampoData.value);
		console.log(parseInt(this._CampoQuantidade.value));
		console.log(parseFloat(this._CampoValor.value));

		console.log('Ação executada');
	}
}