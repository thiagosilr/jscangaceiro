class DataConverter {
	static ParaTexto(data) {
		return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
	}

	static ParaData(texto) {
		if(!/^\d{4}-\d{2}-\d{2}$/.test(texto))	{
			throw new Error('Para converter a data deve estar no formato: aaaa-mm-dd');
		}

		return new Date(
			...texto.split('-')
			.map((item, indice) => item - indice % 2)
		);
	}
}
