// 2º exercício

// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function exibePares(x, y) {
    let num1 = x, num2 = y;

    for(num1 = x; num1 < num2; num1++) {
        if(num1 % 2 === 0)
            console.log(num1);
    }
}

exibePares(32, 321);
