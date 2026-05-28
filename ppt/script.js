function jogar(escolha){
    let opcoes = ['pedra', 'papel', 'tesoura']
    let computador = opcoes[Math.floor(Math.random()*3)]

    let resultado = ""
    if(escolha == computador){
        resultado = "empate"
    } else if (escolha == "pedra" && computador == "tesoura" ||
         (escolha == "tesoura" && computador == "papel") ||
          (escolha == "papel" && computador == "pedra")){

        resultado = "Jogador ganhou!!"
    } else {
        resultado = "Computador ganhou"
    }

    let resultado1 = document.getElementById("resultado")
    resultado1.innerText =  "Jogador: "+ escolha + " | Computador : " + computador + " = " + resultado
}