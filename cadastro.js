//adiciona um evento no botão de cadastro para o clique:
document.getElementById('btn-submit').addEventListener('click', function(event){
    event.preventDefault(); 

// Pega os elementos de entrada e armazena em variáveis:
var password = document.getElementById('password').value;
var confirmasenha = document.getElementById('confirmasenha').value;
var name = document.getElementById('name').value;
var lastname = document.getElementById('lastname').value;
var email = document.getElementById('email').value;


console.log(password, confirmasenha) //printando os valores digitados pra verificar se o que digitou foi igual

//verifica se os campos estão vazios:
if (name === '' || lastname === '' || email === '' || password === '' || confirmasenha === '') {
    alert('Preencha todos os campos obrigatorios para cadastrar');
    return;
}

//verificação das senhas (verifica se a senha do campo principal é a mesma do campo de confirmação):
if (password === confirmasenha) {
    console.log("funciona - cadastro realizado")
}else {
    alert("As senhas precisam ser iguais")
    return;
}

});
