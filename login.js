//Verificação para validação
        document.getElementById('btnsublogin').addEventListener('click', function(event){
            event.preventDefault(); 
    
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
    
            if (username === '' || password === '') {
                alert('Preencha todos os campos para realizar login');
                return;
            }

            console.log(username, password); //só pra mostrar que tá passando o login e senha

            if (username === 'teste' && password === 'teste') {
                alert('Login realizado!');
                window.location.href = 'solicitacao.html';
            }else {
                alert('Usuário ou senha inválido. Tente novamente.');
            }

            form.addEventListener("submit", (event) => {
                // Se todos os campos forem válidos, redirecionar para a página inicial
                if (isValid()) {
                  window.location.href = "homepage.html";}
                
        });