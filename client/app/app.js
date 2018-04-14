const controller = new NegociacaoController();

document.querySelector('.form').addEventListener('submit', controller.Adicionar.bind(controller));
document.querySelector('#botao-apagar').addEventListener('click', controller.Apagar.bind(controller));