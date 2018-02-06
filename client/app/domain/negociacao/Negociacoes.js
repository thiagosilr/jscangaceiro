class Negociacoes {
	constructor() {
		this._negociacoes = [];
	}

	Adicionar(negociacao) {
		this._negociacoes.push(negociacao);
	}
	
	ParaArray() {
		return [].concat(this._negociacoes);
	}

	get VolumeTotal() {
		return this._negociacoes.reduce(
			(total, negociacao) => {
				total + negociacao._Volume
			}, 0
		);
	}
}
