document.getElementById('btn-submit').addEventListener('click', function(event){
    event.preventDefault(); 
// Pega os elementos de entrada
var password = document.getElementById('password').value;
var confirmasenha = document.getElementById('confirmasenha').value;

console.log(password, confirmasenha)

if (password === confirmasenha) {
    console.log("senhas iguais")
}else {
    alert("As senhas precisam ser iguais")
    return;
}

});