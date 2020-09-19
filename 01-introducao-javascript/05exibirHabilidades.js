// 5º exercício

// Dado o seguinte vetor de objetos:
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

// Escreva uma função que produza o seguinte resultado:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

function exibeHabilidades(devs) {
    for(let dev of devs) {
        console.log(`O ${dev.nome} possui as habilidades: ${dev.habilidades.join(', ')}`);
    }
}

exibeHabilidades(usuarios);
