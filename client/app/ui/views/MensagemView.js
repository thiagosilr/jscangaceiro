class MensagemView extends View {
	Template(model) {
		return model.Texto
			? `<p class="alert alert-info">${model.Texto}</p>`
			: `<p></p>`;
	}
}