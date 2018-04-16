class NegociacaoController {
	constructor() {
		const $ = document.querySelector.bind(document);
		this._CampoData = $('#data');
		this._CampoQuantidade = $('#quantidade');
		this._CampoValor = $('#valor');
		
		this._Negociacoes = new Bind(
			new Negociacoes(),
			new NegociacoesView('#negociacoes'),
			'Adicionar', 'Esvaziar'
		);

		this._Mensagem = new Bind(
			new Mensagem(),
			new MensagemView('#mensagem-view'),
			'Texto'
		);

		this._Service = new NegociacaoService();
	}

	Adicionar(event) {
		try {
			event.preventDefault();

			let data = DataConverter.ParaData(this._CampoData.value);
			let negociacao = new Negociacao(
				data,
				this._CampoQuantidade.value,
				this._CampoValor.value
			);
			this._Negociacoes.Adicionar(negociacao);
			this._Mensagem.Texto = 'Negociação adicionada com sucesso.';
			this._LimparFormulario();
		} catch(ex) {
			console.log(ex);
			console.log(ex.stack);

			if (ex instanceof DataInvalidaException) {
				this._Mensagem.Texto = ex.message;
			}
		}
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
	}

	Importar() {
		this._Service
			.ObterNegociacoesDoPeriodo()
			.then(negociacoes => {
				negociacoes
					.filter(novaNegociacao => 
						!this._Negociacoes
							.ParaArray()
							.some(negociacaoExistente => 
								novaNegociacao.Igual(negociacaoExistente)
							)
					)
					.forEach(negociacao => this._Negociacoes.Adicionar(negociacao));
				this._Mensagem.Texto = 'Negociações	do	período	importadas com sucesso';
			})
			.catch(erro	=> this._Mensagem.Texto = erro);

		// Execução em série.
		// const negociacoes = [];

		// this._Service.ObterNegociacoesDaSemana()
		// 	.then(
		// 		semana => {
		// 			negociacoes.push(...semana);
		// 			return this._Service.ObterNegociacoesDaSemanaAnterior();
		// 		}
		// 	)
		// 	.then(
		// 		anterior => {
		// 			negociacoes.push(...anterior);
		// 			return this._Service.ObterNegociacoesDaSemanaRetrasada();
		// 		}
		// 	)
		// 	.then(
		// 		retrasada => {
		// 			negociacoes.push(...retrasada);
		// 			negociacoes.forEach(negociacao => this._Negociacoes.Adicionar(negociacao));
		// 			this._Mensagem.Texto = 'Negociações	importadas	com	sucesso';
		// 		}
		// 	)
		// 	.catch(erro	=> this._Mensagem.Texto	= erro);
	}
}