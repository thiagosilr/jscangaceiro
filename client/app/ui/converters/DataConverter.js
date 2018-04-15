class DataConverter {
	static ParaTexto(data) {
		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
	}

	static ParaData(texto) {
		if(!/\d{2}\/\d{2}\/\d{4}/.test(texto))	{
			throw new DataInvalidaException();
		}

		return new Date(
			...texto.split('/')
			.reverse()
			.map((item, indice) => item - indice % 2)
		);
	}
}
