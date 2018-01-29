class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._CampoData = $('#data');
		this._CampoQuantidade = $('#quantidade');
		this._CampoValor = $('#valor');
	}

	Adicionar(event) {
		event.preventDefault();

		let data = new Date(
			...this._CampoData.value.split('-')
			.map((item, indice) => item - indice % 2)
		);

		let negociacao = new Negociacao(
			data,
			this._CampoQuantidade.value,
			this._CampoValor.value
		);

		console.log(negociacao);
	}
}