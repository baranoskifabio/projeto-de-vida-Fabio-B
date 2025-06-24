const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(",abaa-conteudo")

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo")
       }

        botoes[i].classList.add("ativo");
     botoes[i].classList.add("ativo");

    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("10-01-2025T00:00:00");
let tempoAtual = new Date();

contadores[0]. textContent = tempoObjetivo1- tempoAtual;

function calculaTempo (tempoObjetivo){
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundas = Math.floor(tempo/1000);
let minutos = Math.floor(minutos/60);
let dias = Math.floor(horas/24);
}