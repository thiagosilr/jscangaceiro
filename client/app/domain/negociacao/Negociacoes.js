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
}
