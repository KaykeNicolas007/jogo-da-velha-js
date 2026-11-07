function escolherBolaOuX(isJogador1) {
  if (isJogador1) return "x";
  return "o";
}

function mudarJogador(isJogador1) {
  if (isJogador1) return false;
  return true;
}

function isBlocoMarcado(bloco) {
  if (!bloco.textContent) return false;
  return true;
}

function addListenersGrade(blocosGrade, isJogador1) {
  for (let i = 0; i < blocosGrade.length; i++) {
    blocosGrade[i].addEventListener("click", function () {
      if (!isBlocoMarcado(blocosGrade[i])) {
        blocosGrade[i].textContent += escolherBolaOuX(isJogador1);
      }
      isJogador1 = mudarJogador(isJogador1);
    });
  }
}

const blocosGrade = document.querySelectorAll(".blocks");
let isJogador1 = true;

addListenersGrade(blocosGrade, isJogador1);
