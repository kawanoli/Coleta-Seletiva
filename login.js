//adiciona um evento no botão de login para o clique:
        document.getElementById('btnsublogin').addEventListener('click', function(event){
            event.preventDefault(); 
            
            //guarda os valores digitados nos campos de usuário e senha em váriaveis
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
    
            //pega as variáveis de user e senha e verifica se uma delas está vazia (verificação de campo vazio):
            if (username === '' || password === '') {
                alert('Preencha todos os campos para realizar login');
                return;
            }

            console.log(username, password); //só pra mostrar que tá passando o login e senha

            //verifica se o username e a senha são válidos:
            if (username === 'teste' && password === 'teste') {
                alert('Login realizado!');
                window.location.href = 'solicitacao.html'; //caso user e senha válidos, envia para a página de solicitação
            }else {
                alert('Usuário ou senha inválido. Tente novamente.');
            }

        });