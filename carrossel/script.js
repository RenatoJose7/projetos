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

    if(indice < 0){
        indice = imagens.length - 1
    }

    mostrarImagens()
}




let imagens2 = document.querySelectorAll(".img1")
let indiceFilme = 0

function mostrarFilmes(){
    imagens2.forEach(function(img){
        img.classList.remove("ativa")
    })

    imagens2[indiceFilme].classList.add("ativa")
}

function passar(){
    indiceFilme++

    if(indiceFilme >= imagens2.length){
        indiceFilme = 0
    }

    mostrarFilmes()
}

setInterval(passar, 2500)