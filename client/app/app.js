const controller = new NegociacaoController();
const $	= document.querySelector.bind(document);

$('.form').addEventListener('submit', controller.Adicionar.bind(controller));
$('#botao-apagar').addEventListener('click', controller.Apagar.bind(controller));
$('#botao-importar').addEventListener('click', controller.Importar.bind(controller));