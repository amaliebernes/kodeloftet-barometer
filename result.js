let urlQueryParameters = new URLSearchParams(window.location.search);

let choiceA = urlQueryParameters.get("a");
let choiceB = urlQueryParameters.get("b");
let choiceC = urlQueryParameters.get("c");

console.log(choiceA);
console.log(choiceB);
console.log(choiceC);

// Finne elementene vi trenger
let columnA = document.getElementById("choice-a");
let columnB = document.getElementById("choice-b");
let columnC = document.getElementById("choice-c");

// Sett innline css styling til korrekt verdier
columnA.style = "height: " + 10 * choiceA + "px;";
columnB.style = "height: " + 10 * choiceB + "px;";
columnC.style = "height: " + 10 * choiceC + "px;";
