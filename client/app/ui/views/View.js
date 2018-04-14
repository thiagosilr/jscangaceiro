class View {
	constructor(seletor){
		this._Elemento = document.querySelector(seletor);
	}

	Update(model){
		this._Elemento.innerHTML = this.Template(model);
	}
}