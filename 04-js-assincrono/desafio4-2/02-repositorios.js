// 2º exercício

// Crie uma tela com um <input> que deve receber o nome de um usuário no Github. Após digitar o
// nome do usuário e clicar no botão buscar a aplicação deve buscar pela API do Github (conforme
// URL abaixo) os dados de repositórios do usuário e mostrá-los em tela:
// URL de exemplo: https://api.github.com/users/diego3g/repos
// Basta alterar "diego3g" pelo nome do usuário.

// <input type="text" name="user">
// <button onclick="">Adicionar</button>

// Depois de preencher o input e adicionar, a seguinte lista deve aparecer abaixo:

// <ul>
//  <li>repo1</li>
//  <li>repo2</li>
//  <li>repo3</li>
//  <li>repo4</li>
//  <li>repo5</li>
// </ul>

const buttonElement = document.querySelector('#app button');
const inputElement = document.querySelector('#app input');
const listElement = document.querySelector('#app ul');

buttonElement.onclick = function() {
    const user = inputElement.value;

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