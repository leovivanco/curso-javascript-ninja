pessoa = {
    nome: 'Leonardo',
    sobrenome: 'Vivanco',
    altura: 1.80,
    peso: 93.5,
    idade: 27
}

//Adicionando valor a variavel

pessoa.sexo = 'masculino';
pessoa.cor = 'caucasiano';

//Adicionando aniversario

pessoa.aniversario = function() {
    pessoa.idade++
}
pessoa.aniversario();

//Adiciona nomeCompleto
pessoa.nomeCompleto = function() {
    pessoa.nomeCompleto = `${pessoa.nome} ${pessoa.sobrenome}`
}
pessoa.nomeCompleto();
console.log(pessoa);


