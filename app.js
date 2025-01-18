    let friendsList = [] //Variável para armazenar a lista de amigos

    let friendNameInput = document.querySelector('#amigo') //Variável para pegar o input onde será digitado o nome

    let divInput = document.querySelector('.input-wrapper') //Variável que seleciona a div do input para criar um span logo após.

    let spanAlert = document.createElement('span'); // Variável que cria uma tag span

    let ulList = document.getElementById('listaAmigos') // Variável para pegar a ul listaAmigos para exibir os nomes

    let ulResult = document.getElementById('resultado')

    // Função para adicionar o amigo no Array/Lista com algumas validações
    function adicionarAmigo() {
        // Condição -> se o campo estiver vazio:
        if(friendNameInput.value === '') {
            // Adiciona um texto ao span criado anteriormente        
            spanAlert.textContent = 'Preencha o campo com o nome de um amigo'
            
            // Adiciona uma cor ao texto
            spanAlert.style.color = 'red'
            
            // Adiciona um espaçamento na margem superior de 20 px
            spanAlert.style.marginTop = '20px'

            // Cria o span logo após a caixa de texto
            divInput.after(spanAlert)

        // Condição -> caso não esteja vazio
        } else {
            // Pega o nome digitado pelo usuário utilizando .value e adiciona à lista usando .push
            friendsList.push(friendNameInput.value)

            // Limpa o span de alerta e o nome digitado para que não fiquem sendo exibidos na tela já que a condição foi cumprida.
            spanAlert.textContent = ''
            friendNameInput.value = ''

            // Limpa a lista antes de adicionar novos itens para que não fique repetindo os nomes toda vez que for atualizada (experimente retirar para ver como funcionaria)
            ulList.innerHTML = ''

            // forEach percorre cada elemento adicionado ao array/lista
            friendsList.forEach(friend => {

                // Criação de uma tag li para receber um nome do array e ser adicionado à tag ul como elemento filho
                let liItem = document.createElement('li')

                // Conforme percorre a lista, cada elemento é atribuído à li através do textContent (também pode ser utilizado o innerHTML)
                liItem.textContent = friend

                // Relaciona a tag li criada como um elemento filho da tag ul
                ulList.appendChild(liItem)
            })
        }
    }

    // Função para sortear um amigo
    function sortearAmigo() {

        // Verifica se o array está vazio através do length (se for 0 é porque nenhum elemento foi adicionado)
        if(friendsList.length === 0) {
            // Adiciona um texto ao span criado anteriormente        
            spanAlert.textContent = 'Você não adicionou nenhum amigo!'
            
            // Adiciona uma cor ao texto
            spanAlert.style.color = 'red'
            
            // Adiciona um espaçamento na margem superior de 20 px
            spanAlert.style.marginTop = '20px'

            // Cria o span logo após a caixa de texto
            divInput.after(spanAlert)
        } else {
            spanAlert.textContent = ''
            // O Math.random sorteia números apenas entre 0 e 1 (casas decimais), por isso precisa multiplicar pelo comprimento da lista, para dar um valor correspondente à quantidade de itens dentro dela (ainda em decimais). 
            // Ao passo que o Math.floor arredonda o número para baixo, garantindo que o número seja inteiro e igual à um número dentro do limite de elementos da lista.
            const randomIndex = Math.floor(Math.random() * friendsList.length)
        
            // O randomIndex irá trazer o número inteiro, e para saber quem é o amigo sorteado, precisamos procurar esse número na lista. Por isso ele foi colocado dentro das []. 
            // A título de exemplo seria algo como friendsList[2] -> o amigo que estiver no índice 2 foi o sorteado
            const sortedFriend = `${friendsList[randomIndex]} foi sorteado(a)`
        
            // Adiciona o amigo sorteado ao texto da ul
            ulResult.textContent = sortedFriend

            // Remove o amigo que já foi sorteado da lista com o método splice, utlizando o índice sorteado como parâmetro e passando 1 como argumento para remover um único item.
            friendsList.splice(randomIndex, 1)
        }
    }
