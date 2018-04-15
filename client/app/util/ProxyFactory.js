class ProxyFactory {
	static Create(objeto, props, callback) {
		return new Proxy(objeto, {
			get(target, prop, receiver) {
				// Se for um função (método) sendo executado.
				if (typeof(target[prop]) == typeof(Function) && props.includes(prop)) {
					return function() {
						// Executa o método solicitado.
						target[prop].apply(target, arguments);
						// Executa a ação após executação do método solicitado.
						callback(target);
					}
				} else {
					return target[prop];
				}
			},
			set(target, prop, value, receiver) {
				const update = Reflect.set(target, prop, value);
				if (props.includes(prop)) {
					callback(target);
				}
				return update;
			}
		});
	}
}