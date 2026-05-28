let popup1 = document.getElementById("popup1")

function abrir(){
    popup1.style.display = "flex"
}
function entrar(){
    popup1.style.display = "none"
}

let popup2 = document.getElementById("popup2")


function excluir(){
    popup2.style.display = "flex"
}

function nao(){
    popup2.style.display = "none"
}
function sim(){
    popup2.style.display = "none"
}


let popup3 = document.getElementById("popup3")

function abrirImagem(){
    popup3.style.display = "flex"
}

function fecharImagem(){
    popup3.style.display = "none"
}


let popup4 = document.getElementById("popup4")
let curiosidade = document.getElementById("curiosidade")

let frases = [
    "O primeiro carro foi criado em 1886.",
    "A Ferrari começou fabricando carros de corrida.",
    "O Bugatti Chiron passa dos 400 km/h.",
    "O cinto de segurança salva milhares de vidas todos os anos."
]

function mostrarCuriosidade(){
    let numero = Math.floor(Math.random() * frases.length)

    curiosidade.innerText = frases[numero]
    popup4.style.display = "flex"
}

function fecharCuriosidade(){
    popup4.style.display = "none"
}


let popup5 = document.getElementById("popup5")
let senhaSecreta = document.getElementById("senhaSecreta")
let tituloAviso = document.getElementById("tituloAviso")
let mensagemAviso = document.getElementById("mensagemAviso")

function verificarSenha(){
    if(senhaSecreta.value == "1234"){
        tituloAviso.innerText = "Parabéns!"
        mensagemAviso.innerText = "Você acertou a senha."
    } else {
        tituloAviso.innerText = "Erro!"
        mensagemAviso.innerText = "Senha incorreta. Tente novamente."
    }

    popup5.style.display = "flex"
}

function fecharAviso(){
    popup5.style.display = "none"
}