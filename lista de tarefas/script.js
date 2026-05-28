function adicionar(){
    // trazer input e lista
    let tarefa = document.getElementById("tarefa").value
    let lista = document.getElementById("lista")
    let tarefaInput = document.getElementById("tarefa")
    // Não aceitar tarefa vazia
    if (tarefa == ""){
        alert("Digite uma tarefa")
        return
    }

    // criar o li
    let notaTarefa = document.createElement("li")
    notaTarefa.innerText = tarefa

    // adicionar o li no site
    lista.appendChild(notaTarefa)

    // limpar input
    tarefaInput.value = ""

    notaTarefa.onclick = function(){
        lista.removeChild(notaTarefa)
    }

    let textoOriginal = tarefa

    notaTarefa.onmouseover = function(){
    notaTarefa.innerText = "Apagar Tarefa"
    }

    notaTarefa.onmouseout = function(){
    notaTarefa.innerText = textoOriginal
    }

}