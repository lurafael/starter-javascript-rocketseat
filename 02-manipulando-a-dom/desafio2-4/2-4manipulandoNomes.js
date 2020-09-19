// 4º exercício

// Seguindo o resultado do exercício anterior adicione um input em tela e um botão como a seguir:

// <input type="text" name="nome">
// <button onClick="adicionar()">Adicionar</button>

// Ao clicar no botão, a função adicionar() deve ser disparada adicionando um novo item a lista de
// nomes baseado no nome preenchido no input e renderizando o novo item em tela juntos aos
// demais itens anteriores. Além disso, o conteúdo do input deve ser apagado após o clique.

const buttonElement = document.querySelector('#app button');
const inputElement = document.querySelector('#app input');
const listElement = document.querySelector('#app ul');
const names = ["Diego", "Gabriel", "Lucas"];

function renderNames() {
    listElement.innerHTML = '';

    for (let name of names) {
        const nameElement = document.createElement('li');
        const textElement = document.createTextNode(name);

        nameElement.appendChild(textElement);
        listElement.appendChild(nameElement);
    }
}

function adicionar() {
    const inputElement = document.querySelector('#app input');
   
    names.push(inputElement.value);
    inputElement.value = '';
    renderNames();
}

renderNames();