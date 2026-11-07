function escolherBolaOuX(x, isJogador1) {
  if (isJogador1) return x;
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

function addListenersGrade(blocosGrade, isJogador1, x) {
  for (let i = 0; i < blocosGrade.length; i++) {
    blocosGrade[i].addEventListener("click", function () {
      if (!isBlocoMarcado(blocosGrade[i])) {
        blocosGrade[i].textContent += escolherBolaOuX(x, isJogador1);

        if (isJogador1) {
          blocosGrade[i].classList.add("x");
        } else {
          blocosGrade[i].classList.add("o");
        }
      }
      isJogador1 = mudarJogador(isJogador1);
    });
  }
}

const blocosGrade = document.querySelectorAll(".blocks");
const x = document.querySelector(".x");
const o = document.querySelector(".o");
let isJogador1 = true;

addListenersGrade(blocosGrade, isJogador1, x.innerHTML);
