const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
// Erstelle einen Loop mit do...while.
// Es sollen alle gerade Zahlen bis 20 im Dokument ausgeben werden.
console.log("%c===== lev1_8 do while =====", "background-color:green");

let zahlen = 2;
do {
  console.log(zahlen);
  zahlen += 2;
} while (zahlen <= 20);

// Aufgabenstellung

// Erstelle einen Loop mit do...while.
// Es sollen die Nummern von 1 bis 5 im Dokument ausgeben werden.
// The number is 1
// The number is 2
// The number is 3
// The number is 4
// The number is 5
console.log("%c===== lev1_7 do while =====", "background-color:green");
let number = 1;
do {
  console.log("The number is " + number);
  number++;
} while (number <= 5);

// Aufgabenstellung

// Wir haben in unserem HTML ein Inputfeld, in dem der User eine Zahl eingeben soll.
// Schreibe eine Funktion, mit der du am Ende in deinem HTML das Wort “Loop” ausgibst.
// Die Anzahl der Buchstaben “o” variiert durch die Eingabe des Users.

// Du wirst mit einem Array arbeiten müssen.
// Nutze einen Loop und eine Array-Methode, um an einer bestimmten Stelle das neue Element hinzuzufügen.
// Wandle das Array am Ende in einen String um.
console.log(
  "%c===== lev2_2 do loops with input =====",
  "background-color:green"
);
let inputUser = document.getElementById("inputUser");
let output = document.getElementById("output");

function btn() {
  // array
  let loop = ["L", "p"];
  let a = Number(inputUser.value);
  //  o `s löschen
  let outputO = "";
  // output löschen
  output.innerHTML = "";
  //for Loop
  for (let l = 0; l < a; l++) {
    outputO += "o";
  }
  // Array umwandeln in String
  loop.splice(1, 0, outputO);
  output.style.color = "#00ff00";
  // output innerHTML
  output.innerHTML = loop.join("");
}

// Wir verfeinern unseren “Loooooop” aus Aufgabe 2_2
// Jetzt wollen wir eine Fehlermeldung ausgeben, wenn der User 0 eingibt
// Zusätzlich überprüfen wir, ob der User eine gerade Zahl eingegeben hat
// wenn das der Fall ist werden wir nur die Buchstaben“o” in unsere Ausgabe schreiben
// Bsp: // input: 4 output: Loooop
// wenn die Zahl ungerade ist
// möchten wir, dass sich die Buchstaben “o” und die Zahlen “0” in der Ausgabe abwechseln
// Bsp: // input: 5 output: Lo0o0op
console.log("%c===== lev3_3 do while =====", "background-color:green");
let inputUser2 = document.getElementById("inputUser2");
let output2 = document.getElementById("output");

function btn2() {
  // array
  let loop = ["L", "p"];
  let a = Number(inputUser2.value);
  //  o `s löschen
  let outputO2 = "";
  // output löschen
  output2.innerHTML = "";
  if (a > 0) {
    if (a % 2 == 0) {
      //for Loop
      for (let l = 0; l < a; l++) {
        outputO2 += "o";
      }
      // Array umwandeln in String
      loop.splice(1, 0, outputO2);
      output2.style.color = "#00ff00";
      // output innerHTML
      output2.innerHTML = loop.join("");
    } else {
      //for Loop
      for (let l = 0; l < a; l++) {
        if (l % 2 == 0) {
          outputO2 += "o";
        } else {
          outputO2 += "0";
        }
      }
      // Array umwandeln in String
      loop.splice(1, 0, outputO2);
      output2.style.color = "#00ff00";
      // output innerHTML
      output2.innerHTML = loop.join("");
    }
  } else {
    alert("Fehlermeldung! Bitte keine Null eingeben");
  }
}
// Wir wollen mit Hilfe eines Loops etwas berechnen.
// Wir haben einen input, in dem der User eine Nummer eingeben soll.
// Wir haben 2 Select-Optionen, bei denen der User eine Zahl zwischen 2 und 9 auswählen kann.
// Wir wollen jede Zahl von 0 bis zu der Zahl, die der User in das Input-Feld eingegeben hat, überprüfen.
// Wenn diese Zahl durch eine der ausgewählten Zahlen teilbar ist, soll sie zur Gesamtsumme addiert werden

// Bsp: input: 10, select1: 3, select2: 5
// 	3+5+6+9 = 23
// Bsp: input: 10, select1: 4, select2: 7
// 	4+7+8 = 19
// Nutze einen Loop
// Nutze den Modulo, um zu überprüfen, ob die Zahl durch die ausgewählten teilbar ist.

// Bonus

// Gib eine Fehlermeldung, wenn der User eine leere Eingabe geschrieben hat.
// Gib eine Fehlermeldung, wenn der User in beiden select dieselbe Zahl gewählt hat.

console.log("%c===== lev3_4 do while =====", "background-color:green");
// input, in dem User eine Nummer eingeben soll
let inputUser3 = document.getElementById("inputUser3");
let output3 = document.getElementById("output3");
let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");

// Funktion Ausrechnen
function calculate() {
  // array;
  maxNum = [];
  // Variablen bennenen und deklarieren
  let c = Number(inputUser3.value);
  let n = Number(firstNum.value);
  let m = Number(secondNum.value);
  let z = Number(output3.value);
  let summe = 0;
  if (c == "") {
    alert("Fehlermeldung! Das Feld darf nicht leer sein");
    return;
  }
  if (n === m) {
    alert(
      "Fehlermeldung! Die selektierten Zahlen dürfen nicht identisch sein!"
    );
    return;
  }
  //for Loop
  for (let p = 0; p < c; p++) {
    if (p % n == 0 || p % m == 0) {
      summe += p;
    }
    // output innerHTML
    output3.innerHTML = summe;
  }
}
