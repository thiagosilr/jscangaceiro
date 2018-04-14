class Negociacoes {
	constructor(callback) {
		this._negociacoes = [];
		this._callback = callback;
		Object.freeze(this);
	}

	Adicionar(negociacao) {
		this._negociacoes.push(negociacao);
		this._callback(this);
	}
	
	ParaArray() {
		return [].concat(this._negociacoes);
	}

	get VolumeTotal() {
		return this._negociacoes.reduce(
			(total, negociacao) => (total + negociacao._Volume), 0
		);
	}

	Esvaziar() {
		this._negociacoes.length = 0;
		this._callback(this);
	}
}
