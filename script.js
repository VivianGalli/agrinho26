// 1. Seleciona o botão pelo ID dele
const botao = document.getElementById("meuBotao");

// 2. Cria a função que será executada quando o botão for clicado
function aoClicar() {
    alert("O botão funcionou com sucesso!");
}

// 3. Adiciona o "escutador de eventos" de clique ao botão
botao.addEventListener("click", aoClicar);