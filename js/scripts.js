function addListenersGrade(blocosGrade) {
  for (let i = 0; i < blocosGrade.length; i++) {
    blocosGrade[i].addEventListener("click", function () {
      console.log((blocosGrade[i].textContent += "X"));
    });
  }
}

const blocosGrade = document.querySelectorAll(".blocks");

addListenersGrade(blocosGrade);
