// 3º exercício

// A partir do resultado do exemplo anterior adicione um indicador de carregamento em tela no lugar
// da lista apenas enquanto a requisição estiver acontecendo:

// <li>Carregando...</li>

// Além disso, adicione uma mensagem de erro em tela caso o usuário no Github não exista.
// Dica: Quando o usuário não existe, a requisição irá cair no .catch com código de erro 404.

const buttonElement = document.querySelector('#app button');
const inputElement = document.querySelector('#app input');
const listElement = document.querySelector('#app ul');

buttonElement.onclick = function() {
    const user = inputElement.value;

    listElement.innerHTML = '<li>Carregando...</li>'

    axios.get(`https://api.github.com/users/${user}/repos`)
        .then(function (response) {
            
            listElement.innerHTML = '';

            for (let repo of response.data) {
                const repoElement = document.createElement('li');
                const repoText = document.createTextNode(repo.name);

                repoElement.appendChild(repoText);
                listElement.appendChild(repoElement);
            }
        })
        .catch(function (error) {
            console.warn(error);
            listElement.innerHTML = 'Usuário não existe!';
        })
}