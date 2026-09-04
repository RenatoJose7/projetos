console.log("__ Ver e Criar data __")

let agora = new Date() // Cria uma data completa de hoje
console.log(agora)

let especifica = new Date(2026, 11, 13) // Ano, Mês e Dia
console.log(especifica)

console.log("__ Separar elementos da data __")

let testes = new Date()
console.log(testes.getFullYear()) // Ano
console.log(testes.getMonth()) // Mês 0-12
console.log(testes.getDate()) // Dia 1-31
console.log(testes.getDay()) // Dia da semana 0-6
console.log(testes.getHours()) // Horas 0-23
console.log(testes.getMinutes()) // Minutos 0-59
console.log(testes.getSeconds()) // Segundos 0-59

console.log("__ Formatar um horário __")

// hora:minuto:segundo
function relogio() {
    let tempo = document.getElementById("tempo")
    let horario = new Date()
    let horas = horario.getHours()
    let minutos = horario.getMinutes()
    let segundos = horario.getSeconds()

    // console.log(horas+":"+minutos+":"+segundos)

    let horaFormatada = String(horas).padStart(2, "0")
    let minutoFormatado = String(minutos).padStart(2, "0")
    let segundoFormatado = String(segundos).padStart(2, "0")

    // console.log(horaFormatada+":"+minutoFormatado+":"+segundoFormatado)

    tempo.innerText = horaFormatada + ":" + minutoFormatado + ":" + segundoFormatado
}
setInterval(relogio, 1000)

console.log("__ Contagem regressiva __")

let segundosRestantes = 1 * 60
console.log(segundosRestantes)
let temporizador
let contagem = document.getElementById("contagem")
let contando

function mostrarTempo() {
    let minutos = Math.floor(segundosRestantes / 60)
    let segundos = segundosRestantes % 60

    let horario = String(minutos).padStart(2, "0") + ":" + String(segundos).padStart(2, "0")
    console.log(horario)
    contagem.innerText = horario
}
function atualizar() {
    if (segundosRestantes <= 0) {
        clearInterval(temporizador)
        contagem.innerText = "Tempo esgotado"
        contando = false
    }
    mostrarTempo()
    segundosRestantes--
}

let iniciar = document.getElementById("iniciar")
let pausar = document.getElementById("pausar")

iniciar.addEventListener("click", function() {
    contando = true
    temporizador = setInterval(atualizar, 1000)
})
pausar.addEventListener("click", function() {
    contando = false
    clearInterval(temporizador)
})
mostrarTempo()


// CONTAGEM REGRESSIVA PARA O NATAL

function contarDias() {
    let hoje = new Date()
    console.log(hoje)

    let natal = new Date(2026, 11, 25)

    // Calcular a diferença
    let diferenca = natal - hoje
    console.log(diferenca)

    // Converter os valores

    let dias = Math.floor(diferenca / 1000 / 60 / 60 / 24)
    console.log(dias)

    let horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
    console.log(horas)

    let minutos = Math.floor(diferenca / 1000 / 60) % 60
    console.log(minutos)

    let segundos = Math.floor(diferenca / 1000) % 60
    console.log(segundos)

    let dezembro = document.getElementById("dezembro")
    dezembro.innerText = dias +" dias " + horas + " horas " + minutos + " minutos e " + segundos + " segundos"
}
setInterval (contarDias, 1000)