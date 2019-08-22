// JSnack #1:
// Crea un array vuoto e chiedi all’utente un numero da inserire
//  nell’array. Continua a chiedere i numeri all’utente
//  e a inserirli nell’array
//  fino a quando la somma degli elementi è minore di 50.

var insnum = [];
var ins;
var somma = 0;

while (somma < 50) {
  ins = parseInt(prompt("Inserisci i numeri fino ad arrivare alla somma di 50"));


  if (somma < 50) {
  somma += ins;
  insnum.push(ins);
} else {
  alert("Stop");
}
}

console.log(somma);
console.log(insnum);
