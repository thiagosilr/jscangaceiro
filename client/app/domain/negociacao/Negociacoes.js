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
		let	total = 0;
		for(let	i =	0;i	< this._negociacoes.length;	i++)	{
			total += this._negociacoes[i]._Volume;
		}
		return	total;
	}
}
