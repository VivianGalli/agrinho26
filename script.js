const botao1 = document.getElementById("botao1");
const resposta1 = document.getElementById("resposta1");

botao1.addEventListener("click", function () {
    if (resposta1.style.display === "none") {
        resposta1.style.display = "block";
        botao1.textContent = "Esconder resposta";
    } else {
        resposta1.style.display = "none";
        botao1.textContent = "Mostrar resposta";
    }
});