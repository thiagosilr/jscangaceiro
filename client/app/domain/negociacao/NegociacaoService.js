class NegociacaoService {
	constructor() {
		this._Http = new HttpService();
	}

	ObterNegociacoesDaSemana() {
		return this._Http
			.Get('negociacoes/semana')
			.then(
				dados => dados.map(objeto => new Negociacao(
					new Date(objeto.data),
					objeto.quantidade,
					objeto.valor
				)),
				erro => {
					throw new Error('Não foi possível obter	as negociações.');
				}
			);
	}

	ObterNegociacoesDaSemanaAnterior() {
		return this._Http
			.Get('negociacoes/anterior')
			.then(
				dados => dados.map(objeto => new Negociacao(
					new Date(objeto.data),
					objeto.quantidade,
					objeto.valor
				)),
				erro => {
					throw new Error('Não foi possível obter	as negociações da semana anterior.');
				}
			);
	}

	ObterNegociacoesDaSemanaRetrasada() {
		return this._Http
			.Get('negociacoes/anterior')
			.then(
				dados => dados.map(objeto => new Negociacao(
					new Date(objeto.data),
					objeto.quantidade,
					objeto.valor
				)),
				erro => {
					throw new Error('Não foi possível obter	as negociações da semana anterior.');
				}
			);
	}

	ObterNegociacoesDoPeriodo() {
		// Execução em paralelo.
		return Promise.all([
			this.ObterNegociacoesDaSemana(),
			this.ObterNegociacoesDaSemanaAnterior(),
			this.ObterNegociacoesDaSemanaRetrasada()
		])
		.then(periodo => periodo
			.reduce((novoArray, item) => novoArray.concat(item), [])
			.sort((a, b) => (b._Data.getTime() - a._Data.getTime()))
		)
		.catch(erro => {
			throw new Error('Não foi possível obter as negociações do periodo.');
		});
	}
}