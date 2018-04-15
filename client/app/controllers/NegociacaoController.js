class NegociacaoController {
	constructor() {
		const $ = document.querySelector.bind(document);
		this._CampoData = $('#data');
		this._CampoQuantidade = $('#quantidade');
		this._CampoValor = $('#valor');

		const self = this;
		this._Negociacoes = new Proxy(new Negociacoes(), {
			get(target, prop, receiver) {
				// Se for um função (método) sendo executado.
				if (typeof(target[prop]) == typeof(Function) && ['Adicionar', 'Esvaziar'].includes(prop)) {
					return function() {
						// Executa o método solicitado.
						target[prop].apply(target, arguments);
						// Executa a ação após executação do método solicitado.
						self._NegociacoesView.Update(target);
					}
				} else {
					return target[prop];
				}
			}
		});
		this._NegociacoesView = new NegociacoesView('#negociacoes');
		this._MensagemView = new MensagemView('#mensagem-view');
		this._Mensagem = new Mensagem();

		this._NegociacoesView.Update(this._Negociacoes);
		this._MensagemView.Update(this._Mensagem);
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

		this._Mensagem.Texto = 'Negociação adicionada com sucesso.';
		this._MensagemView.Update(this._Mensagem);

		this._LimparFormulario();
	}

	_LimparFormulario() {
		this._CampoData.value = '';
		this._CampoQuantidade.value	= 1;
		this._CampoValor.value = 0.0
		this._CampoData.focus();
	}

	Apagar() {
		this._Negociacoes.Esvaziar();
		this._Mensagem.Texto = 'Negociações apagadas com sucesso.';
		this._MensagemView.Update(this._Mensagem);
	}
}