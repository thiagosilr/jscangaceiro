# Estudo do Livro Cangaceiro JS

## GIT
[Client](https://git-for-windows.github.io/)

[Guia comandos](http://rogerdudler.github.io/git-guide/index.pt_BR.html)

```PowerShell
1 - git clone https://github.com/thiagosilr/jscangaceiro (O comando baixa e cria um novo diretório git local);
2 - git status (Exibi os arquivos modificados que ainda não foram comitados);
3 - git add * / git add <arquivo> (Adiciona o(s) arquivo(s) para serem comitados);
4 - git commit -m "<Descrição>" (Realiza o comite dos arquivos adicionados);
5 - git push origin master (Envia os comites para o servidor. Alterar "master" para o nome do branch a qual deseja enviar os comites);

6 - git checkout -b <nome-branch> (Cria um novo branch e acessa o mesmo);
7 - git checkout <nome-branch> (Acessa outro branch);
8 - git branch -d <nome-branch> (Remove branch local);
9 - git push origin --delete <nome-branch> (Remove branch remoto)

10 - git pull origin <nome-branch> (Obtem as modificações do git remoto)

11 - git merge <nome-branch> (Realize o chekcout onde quer realizar o merge. E escreva o branch a qual deseja copiar as informações.)
```

## Comparação JavaScript/jQuery
|JavaScript|jQuery|
|----------|------|
|document.querySelector('#data')|$('#data')|
|document.querySelector('.form').addEventListener('submit', function(event) {})|$('.form').submit(function(event) {})|
|document.createElement('td')|$('&lt;td&gt;')|
|document.querySelector('tr').appendChild()|$('td').append()|

## JavaScript (ECMAScript 6 / ES6 / ECMAScript 2015)
ECMAScript, nome raiz do JavaScript. E o nome da padronização controlada pela [ECMA International](https://www.ecma-international.org/).

Pelos estudos que realizei o padrão que desenvolvemos hoje é o ECMAScript 3 de 1999. Que possui ampla compatibilidade com os nevagadores mais antigos.

Em 2016 foi lançado o ECMAScript 6 que o padrão adotado no livro. Neste mesmo ano a ECMA International/TC39 resolve adotar a padronização do ECMAScript para anual. Portanto no futuro veremos a padronização desta forma ECMAScript 2017...2018...2019. Assim o JavaScript teria uma evoluação mais constante.

### Compatibilidade
|Plataforma|Navegador|Compatibilidade|
|----------|---------|---------------|
|Mobile|iOS 9 Safari|53%|
|Mobile|iOS >= 10 Safari|99%|
|Desktop|Safari 9|53%|
|Desktop|Safari >= 10|99%|
|Desktop|Chrome >= 54|97%|
|Desktop|Opera >= 41|97%|
|Desktop|Firefox >= 50|92% a 97%|
|Desktop|Edge >= 12|60% a 96%|

## Declarando várialvel com let
Ao declarar uma variável com **var** dentro de um bloco de instruções por exemplor um **for**. A variável está acessível fora do do escopo.
A questão do escopo com o **var** somente funciona quando declarado dentro de uma função.

Ex. **var**. Desta forma será impresso três vezes o nome thiago:
```JavaScript
for (var i = 0; i < 2; i++) {
	var nome = 'thiago';
	console.log(nome);
}
console.log(nome);
```

Ex. **let**. Desta forma será impresso duas vezes o nome thiago e irá retornar um erro de variável não declarada fora do **for**:
```JavaScript
for (var i = 0; i < 2; i++) {
	let nome = 'thiago';
	console.log(nome);
}
console.log(nome);
```

## Operador Spread
Implementado no ECMAScript 5.
Utilizado para passarmos cada posição do vetor como parêmetro de uma função.
Para utilizar basta colocar "..." antes do vetor.

Ex.:
```JavaScript
function a (p1, p2, p3) {
	console.log(p1);
	console.log(p2);
	console.log(p3);
}
var b = [1,2,3];
a(...b);
```

Será impresso:
```JavaScript
1
2
3
```

## Arrow functions
Implementado no ECMAScript 6.
A ideia aqui é trazer menor verbosidade para a linguagem. Tornando a escrita do algoritimo objetiva e limpa.
Com arrow functions não temos necessidade de ficar escrevendo a palavra function toda vez que criarmos uma função.

Ex. com várias linhas:
```JavaScript
var a = (c, d) => {
	console.log('parâmetro c: ' + c);
	console.log('parâmetro d: ' + d);
}

a('thiago', 'resende');
```

Ex. com uma linha:
```JavaScript
var b = (x, y) => console.log('x: ' + x + 'y: ' + y);
```

## Classe estrutura
```JavaScript
class Pessoa {
	constructor() {

	}

	static MetodoEstatico(parametro) {
	
	}

	get Nome() {

	}

	// Parâmetro com valor padrão.
	set Nome(nome = 'Thiago') {

	}
}
```