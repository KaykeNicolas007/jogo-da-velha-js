function marcarBolaOuX(bloco, isJogador1) {
  const simbolo = isJogador1 ? "x" : "o";
  bloco.textContent = simbolo;
  bloco.classList.add(simbolo);
}

function checarVitoria(grade) {
  const combinacoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combinacao of combinacoesVencedoras) {
    const [a, b, c] = combinacao;
    console.log(combinacao);

    const blocoA = grade[a];
    const blocoB = grade[b];
    const blocoC = grade[c];

    if (
      blocoA.classList.contains("x") &&
      blocoB.classList.contains("x") &&
      blocoC.classList.contains("x")
    ) {
      console.log("X vence!");
      return "x";
    }

    if (
      blocoA.classList.contains("o") &&
      blocoB.classList.contains("o") &&
      blocoC.classList.contains("o")
    ) {
      console.log("O vence!");
      return "o";
    }
  }
  return "-";
}

function checarVelha(grade) {
  for (let i = 0; i < grade.length; i++) {
    if (
      !grade[i].classList.contains("x") &&
      !grade[i].classList.contains("o")
    ) {
      return false;
    }
  }
  if (checarVitoria(grade) !== "-") return false;
  console.log("Deu velha!");
  return true;
}

function addListenersGrade(blocosGrade, isJogador1) {
  for (let i = 0; i < blocosGrade.length; i++) {
    const blocoAtual = blocosGrade[i];

    blocoAtual.addEventListener("click", function () {
      if (!blocoAtual.textContent) {
        marcarBolaOuX(blocoAtual, isJogador1);
      }

      if (checarVitoria(blocosGrade) !== "-") {
        alert("Alguém venceu! Reinicie para jogar novamente!");
        return;
      }

      if (checarVelha(blocosGrade)) {
        alert("Deu velha! Reinicie para jogar novamente!");
        return;
      }

      isJogador1 = !isJogador1;
    });
  }
}

const blocosGrade = document.querySelectorAll(".blocks");
let isJogador1 = true;

addListenersGrade(blocosGrade, isJogador1);
