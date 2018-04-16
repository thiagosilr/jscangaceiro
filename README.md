# Estudo do Livro Cangaceiro JS (ECMAScript 6)

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

## Variáveis
### let
Ao declarar uma variável com **var** dentro de um bloco de instruções por exemplor um **for**. A variável está acessível fora do escopo.
A questão do escopo com o **var** somente funciona quando declarado dentro de uma função.

Ex. **var**. Desta forma será impresso três vezes o nome thiago:
```JavaScript
for (var i = 0; i < 2; i++) {
	var nome = 'thiago';
	console.log(nome);
}
console.log(nome);
```

### const
Ao declarar uma variável com **const** a mesma é obrigada a receber um valor durante a declaração. 
E outra regra é não podermos alterar seu valor após sua declaração.

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

## Funções
### Arrow
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

### Reduce
Pecorre todos os itens de um array. E o resultado do cálculo realizado é inserido ao primeiro 
parâmetro da função.

Ex.:
```JavaScript
var carrinhoDeCompra = [
	{
		Nome: 'Produto1',
		Valor: 10.99
	},
	{
		Nome: 'Produto2',
		Valor: 1
	},
	{
		Nome: 'Produto3',
		Valor: 2
	}
];

var total = carrinhoDeCompra.reduce(function(total,	produto) {	
	return	total + produto.Valor
}, 0);

console.log(total);
```

Será impresso:
```JavaScript
13.99
```

### Includes
Verifica se uma determinada palavra existe dentro de uma vetor (array).
```JavaScript
// Retorna true
['Thiago', 'Resende'].includes('Resende');

// Retorna false
['Thiago', 'Resende'].includes('Silva');
```

## Classe estrutura
```JavaScript
class Pessoa {
	constructor(nome, sexo, pais = 'Brasil') {
		this._Nome = nome;
		this._Sexo = sexo;
		this._Pais = pais;
	}

	static MetodoEstatico(parametro) {
		
	}

	get Nome() {
		if (this._Sexo == 'M') {
			return 'Sr. ' + this._Nome;
		} else {
			return 'Sra. ' + this._Nome;
		}
	}

	set Nome(nome) {
		this._Nome = nome.toUpperCase();
	}

	get Sexo() {
		if (this._Sexo == 'M') {
			return 'Masculino';
		} else {
			return 'Feminino';
		}
	}

	get Pais() {
		return this._Pais;
	}
}

class Funcionario extends Pessoa {
	constructor(matricula, nome, sexo, pais = 'Brasil') {
		super(nome, sexo, pais);
		this._Matricula = matricula;
	}

	get Matricula() {
		return this._Matricula;
	}

	set Matricula(matricula) {
		this._Matricula = matricula;
	}
}
```

## Proxy
Utilizado para monitorar quando uma propridade de um objeto é lida ou modificada.
**target**: O objeto original passado como o primeiro parâmetro do objeto Proxy.
**prop**: Nome da propriedade que foi lida ou alterada.
**receiver**: O objeto proxy em execução.
**value**: O valor que esta sendo inserido na propriedade.

Ex.:
```JavaScript
class Pessoa {
}

let proxy = new Proxy(new Pessoa(), {
	get(target, prop, receiver) {
		console.log(`A propriedade ${prop} foi lida`);
		return target[prop];
	},
	set(target, prop, value, receiver) {
		console.log(`A propriedade ${prop} foi modificada. Recebendo o valor ${value}`);

		/* Altera o objeto "target" na propiedade "prop" com o valor "value". E retorna true ou false
		   caso ocorra com sucesso.

		   Não tendo a necessidade de executar o seguinte código:
		   target[prop] = value;
		   return true;
		*/
		return Reflect.set(target, prop, value);
	}
});

proxy.Nome = 'Thiago';
proxy.Nome;
```

## Promise
É o resultado futuro de uma ação. Geralmente utilizado para tratar operações assíncronas.

Ex. de chamada de função simples:
```JavaScript
function obterDados() {
	return new Promise((resolve, reject) => {
		const dados = [
			{
				Nome: 'Thiago'
			},
			{
				Nome: 'João'
			},
			{
				Nome: 'Maria'
			}
		];

		if (dados.length > 0) {
			resolve(dados);
		} else {
			reject('Nenhuma informação encontrada.');
		}
	});
}

// Utilizando functions.
obterDados()
	.then(
		function(dados) {
			console.log(dados);
		},
		function(erro) {
			console.log(erro);
		}
	);

// Utilizando arrow.
obterDados()
	.then(
		dados => {
			console.log(dados);
		},
		erro => {
			console.log(erro);
		}
	);
```

Ex. de chamada com ajax:
```JavaScript
function obterDados() {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', 'http://site.com.br/dados');
		
		xhr.onreadystatechange = ()=> {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject(xhr.reponseText);
				}
			}
		};

		xhr.send();
	});
}

// Utilizando arrow.
obterDados()
	.then(
		dados => {
			console.log(dados);
		},
		erro => {
			console.log(erro);
		}
	);
```

Ex. de multiplas requisições em série (Para aninhar varios "then" basta no anterior retorna um promise):
```JavaScript
function obterDados() {
	return new Promise((resolve, reject) => {
		const dados = [
			{
				Nome: 'A'
			},
			{
				Nome: 'B'
			},
			{
				Nome: 'C'
			}
		];

		if (dados.length > 0) {
			resolve(dados);
		} else {
			reject('Nenhuma informação encontrada.');
		}
	});
}

function obterDados1() {
	return new Promise((resolve, reject) => {
		const dados = [
			{
				Nome: 'D'
			},
			{
				Nome: 'E'
			},
			{
				Nome: 'F'
			}
		];

		if (dados.length > 0) {
			resolve(dados);
		} else {
			reject('Nenhuma informação encontrada.');
		}
	});
}

obterDados()
	.then(
		dados => {
			console.log(dados);
			return ObterDados1();
		}
	)
	.then(
		dados1 => {
			console.log(dados1);
		}
	)
	.catch(erro => { 
		console.log(erro); 
	});
```

Ex. de multiplas requisições em paralelo. São executados paralelamente mas o método then somente é excutado.
quando todas promises forem executadas. É retornado um array, onde cada posição é o resultado de uma promise:
```JavaScript
function obterDados() {
	return new Promise((resolve, reject) => {
		const dados = [
			{
				Nome: 'A'
			},
			{
				Nome: 'B'
			},
			{
				Nome: 'C'
			}
		];

		if (dados.length > 0) {
			resolve(dados);
		} else {
			reject('Nenhuma informação encontrada.');
		}
	});
}

function obterDados1() {
	return new Promise((resolve, reject) => {
		const dados = [
			{
				Nome: 'D'
			},
			{
				Nome: 'E'
			},
			{
				Nome: 'F'
			}
		];

		if (dados.length > 0) {
			resolve(dados);
		} else {
			reject('Nenhuma informação encontrada.');
		}
	});
}

Promise.all([
	obterDados(),
	obterDados1()
])
.then(dados => {
	console.log(dados);
})
.catch(erro => {
	console.log(erro);
});
```