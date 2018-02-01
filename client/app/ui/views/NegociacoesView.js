class NegociacoesView {
	constructor(seletor) {
		this._Elemento = document.querySelector(seletor);
	}

	Update(model) {
		this._Elemento.innerHTML = this.Template(model);
	}

	Template(model) {
		return `
		<table class="table table-hover table-bordered">
	        <thead>
	            <tr>
	                <th>DATA</th>
	                <th>QUANTIDADE</th>
	                <th>VALOR</th>
	                <th>VOLUME</th>
	            </tr>
	        </thead>
	        
	        <tbody>
	        	${
	        		model.ParaArray().map(negociacao => `
        			<tr>
						<td>${DataConverter.ParaTexto(negociacao._Data)}</td>
						<td>${negociacao._Quantidade}</td>
						<td>${negociacao._Valor}</td>
						<td>${negociacao._Volume}</td>
					</tr>`).join('')
	        	}
	        </tbody>
	        
	        <tfoot>
	        	<tr>
	        		<td colspan="3"></td>
	        		<td>${model.VolumeTotal}</td>
	        	</tr>
	        </tfoot>
	    </table>`;
	}
}