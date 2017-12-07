class Negociacao {

	constructor(data, quantidade, valor) {
		this._Data = data;
		this._Quantidade = quantidade;
		this._Valor = valor;

		// Congela as novas instãncias desta classe. Não sendo permitido alterar os atributos de forma direta.
		Object.freeze(this);
	}

	ObterVolume() {
		return this._Quantidade * this._Valor;
	}

	ObterData() {
		return this._Data;
	}

	ObterQuantidade() {
		return this._Quantidade;
	}

	ObterValor() {
		return this._Valor;
	}
}