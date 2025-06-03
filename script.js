const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
enunciado: "qual é o maior time do mundo ",
alternativas: ["real madrid ", " Barcelona"],  
 texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
},
{
enunciado: "qual é o jogor mais bonito",
alternativas: ["Cristiano Ronaldo", "neymar Jr"],  
 texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
},
{
enunciado: "qual é o jogador mais feio",
alternativas: ["Ronaldinho", "Ronaldo fenômeno"],  
 texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
},
{
enunciado: "quem é mais corno",
alternativas: ["de bruyne", "coringa"],  
 texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
},
{
enunciado: "qual é melhor finalizador da historia",
alternativas: ["Yuri aberto", " Caça Rato "],  
 texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer."
},
let atual = 0;
let perguntaAtual;
function mostraPergunta() {
perguntaAtual = perguntas[atual];
caixaPerguntas.textContent = perguntaAtual.enunciado;
mostraAlternativas();
}
function mostraAlternativas() {}
for (const alternativa of perguntaAtual.alternativas) {
}

mostraPergunta();
];