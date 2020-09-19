// 2º exercício

// Utilizando o resultado do primeiro desafio, toda vez que o usuário passar o mouse por cima de
// algum quadrado troque sua cor para uma cor aleatória gerada pela função abaixo:

const buttonElement = document.querySelector('#app button');

function newSquare() {
    const squareElement = document.createElement('div');
    const app = document.querySelector('#app');
    
    squareElement.style.width = '100px';
    squareElement.style.height = '100px';
    squareElement.style.backgroundColor = 'red';
    squareElement.style.border = '2px solid #333';
    squareElement.style.display = 'inline-block';
    squareElement.style.marginTop = '10px';
    
    squareElement.onmouseover = function() {
        return squareElement.style.backgroundColor = getRandomColor();
    };
    
    return app.appendChild(squareElement);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for(var i = 0; i < 6; i++) 
        color += letters[Math.floor(Math.random() * 16)];
    return color;
}

buttonElement.onclick = newSquare;
