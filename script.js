const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "qual time é maior que o palmeiras?",
    alternativas: ["Flamengo", "São Paulo"],
  },
  {
    enunciado: "Qual o melhor FIFA que existiu?",
    alternativas: ["FIFA 17", "FIFA 14"],
  },
  {
    enunciado: "Quem é mais ladrão?",
    alternativas: ["Lula", "var do palmeiras"],
  },
  {
    enunciado: "Quem chuta melhor?",
    alternativas: ["Neymar Jr", "Raphinha"],
  },
  {
    enunciado: "Qual jogador mais feio?",
    alternativas: ["Vagner Love", "Frank Ribery"],
  },
];