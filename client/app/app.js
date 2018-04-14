const controller = new NegociacaoController();

document.querySelector('.form').addEventListener('submit', controller.Adicionar.bind(controller));