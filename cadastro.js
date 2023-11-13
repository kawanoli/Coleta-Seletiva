document.getElementById('btn-submit').addEventListener('click', function(event){
    event.preventDefault(); 
// Pega os elementos de entrada
var password = document.getElementById('password').value;
var confirmasenha = document.getElementById('confirmasenha').value;
var name = document.getElementById('name').value;
var lastname = document.getElementById('lastname').value;
var email = document.getElementById('email').value;


console.log(password, confirmasenha)

if (name === '' || lastname === '' || email === '' || password === '' || confirmasenha === '') {
    alert('Preencha todos os campos obrigatorios para cadastrar');
    return;
}

if (password === confirmasenha) {
    console.log("funciona - cadastro realizado")
}else {
    alert("As senhas precisam ser iguais")
    return;
}

});
