// 3º exercício

// A partir do seguinte vetor:

// var nomes = ["Diego", "Gabriel", "Lucas"];

// Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:
// ● Diego
// ● Gabriel
// ● Lucas

const names = ["Diego", "Gabriel", "Lucas"];
const listElement = document.querySelector('#app ul');

for(let name of names) {
    const nameElement = document.createElement('li');
    const textElement = document.createTextNode(name);

    nameElement.appendChild(textElement);
    listElement.appendChild(nameElement);
}
