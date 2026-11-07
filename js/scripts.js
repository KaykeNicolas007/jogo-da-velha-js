function marcarBolaOuX(bloco, isJogador1) {
  const simbolo = isJogador1 ? "x" : "o";
  bloco.textContent = simbolo;
  bloco.classList.add(simbolo);
}

function addListenersGrade(blocosGrade, isJogador1) {
  for (let i = 0; i < blocosGrade.length; i++) {
    const blocoAtual = blocosGrade[i];

    blocoAtual.addEventListener("click", function () {
      if (!blocoAtual.textContent) {
        marcarBolaOuX(blocoAtual, isJogador1);
      }
      isJogador1 = !isJogador1;
    });
  }
}

const blocosGrade = document.querySelectorAll(".blocks");
let isJogador1 = true;

addListenersGrade(blocosGrade, isJogador1);
