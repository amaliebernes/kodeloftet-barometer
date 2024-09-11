// Vi må finne elementene vi er interresert i
let buttonA = document.getElementById("button-a");
let buttonB = document.getElementById("button-b");
let buttonC = document.getElementById("button-c");

let resultLink = document.getElementById("result-link");

// Lagre et sett med variable
let countA = 0;
let countB = 0;
let countC = 0;

// Vi må beskrive hva som skal skje når de trykkes på
function handleButtonAClick() {
  // Først oppdater den global variabelen
  countA = countA + 1;

  // Generer lenke på nytt
  resultLink.href = "result.html?a=" + countA + "&b=" + countB + "&c=" + countC;
}

function handleButtonBClick() {
  countB = countB + 1;

  // Generer lenke på nytt
  resultLink.href = "result.html?a=" + countA + "&b=" + countB + "&c=" + countC;
}

function handleButtonCClick() {
  countC = countC + 1;

  // Generer lenke på nytt
  resultLink.href = "result.html?a=" + countA + "&b=" + countB + "&c=" + countC;
}

// Koble sammen knappene med funksjonaliten
buttonA.addEventListener("click", handleButtonAClick);
buttonB.addEventListener("click", handleButtonBClick);
buttonC.addEventListener("click", handleButtonCClick);
