// 1. Crie um objeto "Usuário" com as propriedades que você desejar. 2. Depois, mostre uma mensagem na tela perguntando quantos usuários  devem ser salvos. 3. Após isso, peça todos os dados necessários para seu objeto usuário 4. e depois o salve em um array. 5. Quando todos os objetos Usuários forem salvos, mostre o valor de cada propriedade do usuário na tela do Browser.

// Resolvendo - 1. Crie um objeto "Usuário" com as propriedades que você desejar

class USUARIO {
    listaUsuarios = [];
    
    adicionarUsuario(nome, sobrenome, idade){
        this.listaUsuarios.push({
            nome: nome,
            sobrenome: sobrenome,
            idade: idade
        });
    }

}

const novoUsuario = new USUARIO();

// Testando construtor!!!
// novoUsuario.adicionarUsuario('Lucas', 'Ferreira', 28)


// Resolvendo - 2. Depois, mostre uma mensagem na tela perguntando quantos usuários devem ser salvos.

let quantidadeUsuarios = Number(window.prompt("Quantos usuários deseja cadastrar?"))

// Resolvendo - 3. Após isso, peça todos os dados necessários para seu objeto usuário 4. e depois o salve em um array.

for(let i = 0; i < quantidadeUsuarios; i++){
    novoUsuario.adicionarUsuario(
        window.prompt("Nome do usuário:"),
        window.prompt("Sobrenome do usuário:"),
        window.prompt("Idade do usuário:")
        )
    }

// Testando se os usuários estão no array
// console.log(novoUsuario.listaUsuarios[1])

// 5. Quando todos os objetos Usuários forem salvos, mostre o valor de cada propriedade do usuário na tela do Browser.

for(let i = 0; i < novoUsuario.listaUsuarios.length; i++){
    document.write(
        `<h2> Dados do usuário: </h2>
        <h3> Nome: </h3> <span> ${novoUsuario.listaUsuarios[i].nome}</span> <br>
        <h3> Sobrenome: </h3> <span>${novoUsuario.listaUsuarios[i].sobrenome} </span> <br>
        <h3> Idade: </h3> <span>${novoUsuario.listaUsuarios[i].idade} </span> <br>
        `
    )
}