let imagens = document.querySelectorAll(".img")
let indice = 0

function mostrarImagens(){
    imagens.forEach(function(img){
        img.classList.remove("ativa")
    })
    imagens[indice].classList.add("ativa")
}
function proximo(){
    indice++
    if(indice >= imagens.length){
        indice = 0
    }
    mostrarImagens()
}
function voltar(){
   indice--

    if (indice < 0) {
        indice = imagens.length - 1
    }

    mostrarImagens()
}


function avancarAutomatico(){
    indice++
    if(indice >= imagens.length){
        indice = 0
    }
    mostrarImagens()
}

setInterval(avancarAutomatico, 2500)