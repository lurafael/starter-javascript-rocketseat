const inputElement = document.querySelector('#app .create-todo input');
const buttonElement = document.querySelector('#app .create-todo button');
const listElement = document.querySelector('#app .list-todos ul');
const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos) {
        const todoElement = document.createElement('li');
        const textTodo = document.createTextNode(todo);
        const linkElement = document.createElement('a');
        const linkText = document.createTextNode('Excluir');
        const pos = todos.indexOf(todo);

        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', `removeTodo(${pos})`);
        linkElement.appendChild(linkText);
        
        todoElement.appendChild(textTodo);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

function addTodo() {
    todos.push(inputElement.value);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

function removeTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}

renderTodos();
buttonElement.onclick = addTodo;