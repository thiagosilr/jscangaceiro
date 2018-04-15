class Bind {
	constructor(model, view, ...props) {
		const proxy = ProxyFactory.Create(model, props, model => {
			view.Update(model);
		});

		view.Update(model);
		return proxy;
	}
}