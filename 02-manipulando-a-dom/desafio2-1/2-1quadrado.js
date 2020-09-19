// 1º exercício

// Crie um botão que ao ser clicado cria um novo elemento em tela com a forma de um quadrado
// vermelho com 100px de altura e largura. Sempre que o botão for clicado um novo quadrado deve
// aparecer na tela.

const buttonElement = document.querySelector('#app button');

buttonElement.onclick = newSquare;

function newSquare() {
    const squareElement = document.createElement('div');
    const app = document.querySelector('#app');

    squareElement.style.width = '100px';
    squareElement.style.height = '100px';
    squareElement.style.backgroundColor = 'red';
    squareElement.style.border = '2px solid #333';
    squareElement.style.display = 'inline-block';
    squareElement.style.marginTop = '10px';
    
    return app.appendChild(squareElement);
}
