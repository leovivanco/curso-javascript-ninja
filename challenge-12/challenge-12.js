(function() {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */

    let person = {
        name: 'Leonardo',
        lastname: 'Vivanco',
        age: 28
    }

    console.log('Propriedades de "person":');

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */
    
    console.log(Object.keys(person))



    /*
    Crie um array vazio chamado `books`.
    */
    

    let books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    let livro1, livro2, livro3;
    livro1 = {
        name: 'Livro dos mares 1',
        pages: 150
    }    
    livro2 = {
        name: 'Livro dos mares 2',
        pages: 250
    }    
    livro3 = {
        name: 'Livro dos mares 3',
        pages: 350
    }
    books.push(livro1);
    books.push(livro2);
    books.push(livro3);
    console.log('\nLista de livros:', books);
    
    /*
    Mostre no console todos os livros.
    */
    console.log(books);

    console.log('\nLivro que está sendo removido:');
    /*
    Remova o último livro, e mostre-o no console.
    */
    let lastBook = books.pop();
    console.log(lastBook);
    
    console.log('\nAgora sobraram somente os livros:');
    /*
    Mostre no console os livros restantes.
    */
    console.log(books);
    

    /*
    Converta os objetos que ficaram em `books` para strings.
    */
    // ?
    console.log('\nLivros em formato string:');


    
    /*
    Mostre os livros nesse formato no console:
    */
    books = JSON.stringify(books);
    console.log(books);
    
    /*
    Converta os livros novamente para objeto.
    */
    
    console.log('\nAgora os livros são objetos novamente:');
    books = JSON.parse(books)

    console.log(books);
    
    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    console.log('[PROPRIEDADE]: [VALOR]');
    
    let array = Object.keys(books);
    console.log(array.length);
    
    for (let index = 0; index < books.length; index++) {        
        for (const key in books[index]) {
            console.log(`${key}: ${books[index][key]}` );
            
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    let myName = ['l', 'e', 'o'];

    console.log('\nMeu nome é:');
    console.log(myName);
    
    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    myName.join()
    console.log(myName.join());

    console.log('\nMeu nome invertido é:');
    
    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    console.log(myName.reverse());
        

    console.log('\nAgora em ordem alfabética:');
    
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    console.log(myName.sort());
})();