class NegociacaoController {
	constructor() {
		let $ = document.querySelector.bind(document);
		this._CampoData = $('#data');
		this._CampoQuantidade = $('#quantidade');
		this._CampoValor = $('#valor');
		this._Negociacoes = new Negociacoes();
		this._NegociacoesView = new NegociacoesView('#negociacoes');

		this._NegociacoesView.Update(this._Negociacoes);
	}

	Adicionar(event) {
		event.preventDefault();

		let data = DataConverter.ParaData(this._CampoData.value);
		let negociacao = new Negociacao(
			data,
			this._CampoQuantidade.value,
			this._CampoValor.value
		);
		this._Negociacoes.Adicionar(negociacao);

		this._LimparFormulario();

		this._NegociacoesView.Update(this._Negociacoes);
	}

	_LimparFormulario() {
		this._CampoData.value = '';
		this._CampoQuantidade.value	= 1;
		this._CampoValor.value = 0.0
		this._CampoData.focus();
	}
}