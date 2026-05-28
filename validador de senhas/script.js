let senha = document.getElementById("senha")
let confirmar = document.getElementById("confirmar")
let mensagem = document.getElementById("mensagem")


confirmar.addEventListener("input", function(){

    let numero = /[0-9]/.test(senha.value)
    let minusculas = /[a-z]/.test(senha.value)
    let maiusculas = /[A-Z]/.test(senha.value)
    let especial = /[!@#$%&;.]/.test(senha.value)
    let tamanho = senha.value.length >= 12


    if(senha.value == confirmar.value && numero && minusculas && especial && tamanho){
        mensagem.innerText="As senhas estão iguais"
        mensagem.classList.add("certo")
        mensagem.classList.remove("errado")
    } else {
        mensagem.innerText="A senha precisa ter números, letras maiúsculas, letras minúsculas, caractéres especiais, 8 caractéres e ser igual"
        mensagem.classList.remove("certo")
        mensagem.classList.add("errado")
    }
})

function mostrarSenha(){
    if(senha.type == "password"){
        senha.type = "text"
    } else {
        senha.type = "password"
    }
}