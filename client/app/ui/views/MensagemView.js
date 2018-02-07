class MensagemView {
	constructor (seletor) {
		this._Elemento = document.querySelector(seletor);
	}

	Template(model) {
		return model.Texto
			? `<p class="alert alert-info">${model.Texto}</p>`
			: `<p></p>`;
	}

	Update(model) {
		this._Elemento.innerHTML = this.Template(model);
	}
}