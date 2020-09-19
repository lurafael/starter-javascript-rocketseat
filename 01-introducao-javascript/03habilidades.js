// 3º exercício

// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
// e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
    return skills.some((item) => item === 'Javascript')
}

const skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));
