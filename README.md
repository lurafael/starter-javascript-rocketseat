<h1 align="center">
    <img alt="Curso Starter JS" src="https://raw.githubusercontent.com/lurafael/starter-javascript-rocketseat/335d2b52f54109736e95226e949d6877e697f742/images/logo-starter.svg" width="400px" />
</h1>

<h3 align="center">
  Curso Starter Rocketseat - JavaScript
</h3>

<blockquote align="center">“Faça seu melhor, mas sempre com prazo de entrega!”</blockquote>

<p align="center">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%23F8952D">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>

</p>

## 1. Desafio 1 - Introdução JavaScript

- [x] 1.1 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/introducao-javascript/01mostraEndereco.js) :heavy_check_mark:
    
```
        Crie uma função que dado o objeto a seguir:
    
        var endereco = {
        rua: "Rua dos pinheiros",
        numero: 1293,
        bairro: "Centro",
        cidade: "São Paulo",
        uf: "SP"
        };
    
        Retorne o seguinte conteúdo:
    
        O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com
        nº 1293. 
```

<br>

- [x] 1.2 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/01-introducao-javascript/02numerosPares.js) :heavy_check_mark:
    
```
        Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:
            
            function pares(x, y) {
             // código aqui
            }
            
            pares(32, 321);
```

<br>


- [x] 1.3 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/01-introducao-javascript/03habilidades.js) :heavy_check_mark:
    
```
        Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
        e retorna um booleano true/false caso exista ou não.
            
            function temHabilidade(skills) {
             // código aqui
            }
            
            var skills = ["Javascript", "ReactJS", "React Native"];
            temHabilidade(skills); // true ou false

```

<br>

- [x] 1.4 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/01-introducao-javascript/04anosEstudos.js) :heavy_check_mark:
    
```
        Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

            function experiencia(anos) {
             // código aqui
            }

            var anosEstudo = 7;
            experiencia(anosEstudo);

            // De 0-1 ano: Iniciante
            // De 1-3 anos: Intermediário
            // De 3-6 anos: Avançado
            // De 7 acima: Jedi Master
```

<br>

- [x] 1.5 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/01-introducao-javascript/05exibirHabilidades.js) :heavy_check_mark:
    
```
        Dado o seguinte vetor de objetos:

            var usuarios = [
             {
             nome: "Diego",
             habilidades: ["Javascript", "ReactJS", "Redux"]
             },
             {
             nome: "Gabriel",
             habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
             }
            ];

        Escreva uma função que produza o seguinte resultado:
        O Diego possui as habilidades: Javascript, ReactJS, Redux
        O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```
        
<br>

## 2. Desafio 2 - Manipulando a DOM

- [x] 2.1 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/02-manipulando-a-dom/desafio2-1/2-1quadrado.js) :heavy_check_mark:    

```
        Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
        vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
        aparecer na tela.
```
        
<br>
    
- [x] 2.2 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/02-manipulando-a-dom/desafio2-2/2-2colorir.js) :heavy_check_mark:
    
```
        Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
        algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

            function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
            }

            var newColor = getRandomColor(); // #E943F0

```
        
<br>
    
- [x] 2.3 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/02-manipulando-a-dom/desafio2-3/2-3listaNomes.js) :heavy_check_mark:

```
        Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
        algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

            function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
            }

            var newColor = getRandomColor(); // #E943F0

```
        
<br>
    
- [x] 2.4 - [Clique aqui para ver a resolução](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/02-manipulando-a-dom/desafio2-4/2-4manipulandoNomes.js) :heavy_check_mark:

```
        Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
        algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

            function getRandomColor() {
            var letters = "0123456789ABCDEF";
            var color = "#";
            for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
            }

            var newColor = getRandomColor(); // #E943F0

```

<br>
    
- [x] 3. Desafio 3 - App de To-dos [Clique para ver os arquivos do projeto](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/03-app-todos) :heavy_check_mark:

<br>

![Foto do app de To-dos](https://github.com/lurafael/starter-javascript-rocketseat/blob/master/images/foto-app-to-dos.png)


        
<br>
    
- [ ] 4. Desafio 4 - JS assíncrono

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](/LICENSE) para mais detalhes.

---

Feito com :purple_heart: by [Rocketseat](https://rocketseat.com.br) :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)

