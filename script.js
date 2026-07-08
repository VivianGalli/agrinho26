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


const botao2 = document.getElementById("botao2");
const resposta2 = document.getElementById("resposta2");

botao2.addEventListener("click", function () {
    if (resposta2.style.display === "none") {
        resposta2.style.display = "block";
        botao2.textContent = "Esconder resposta";
    } else {
        resposta2.style.display = "none";
        botao2.textContent = "Mostrar resposta";
    }
});


const botao3 = document.getElementById("botao3");
const resposta3 = document.getElementById("resposta3");

botao3.addEventListener("click", function () {
    if (resposta3.style.display === "none") {
        resposta3.style.display = "block";
        botao3.textContent = "Esconder resposta";
    } else {
        resposta3.style.display = "none";
        botao3.textContent = "Mostrar resposta";
    }
});


const botao4 = document.getElementById("botao4");
const resposta4 = document.getElementById("resposta4");

botao4.addEventListener("click", function () {
    if (resposta4.style.display === "none") {
        resposta4.style.display = "block";
        botao4.textContent = "Esconder resposta";
    } else {
        resposta4.style.display = "none";
        botao4.textContent = "Mostrar resposta";
    }
});


// MODO ESCURO

const modoEscuro = document.getElementById("modoEscuro");

modoEscuro.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        modoEscuro.textContent = "☀️ Modo claro";
    } else {
        modoEscuro.textContent = "🌙 Modo escuro";
    }
});