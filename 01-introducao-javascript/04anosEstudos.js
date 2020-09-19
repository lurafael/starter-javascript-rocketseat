// 4º exercício

// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
    const anoOuAnos = (anos === 1) ? 'ano' : 'anos';
    let experiencia;

    switch (true) {
        case (anos >= 0 && anos <= 1):
            experiencia = 'Iniciante';
            break;
        case (anos >= 1 && anos <= 3):
            experiencia = 'Intermediário';
            break;
        case (anos >= 3 && anos <= 6):
            experiencia = 'Avançado';
            break;
        case (anos >= 7):
            experiencia = 'Jedi Master';
            break;
        default:
            return console.log('O valor digitado é inválido!')
    }
    return console.log(`Você tem ${anos} ${anoOuAnos} de experiência, seu nível é: ${experiencia}`);
}

const anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master