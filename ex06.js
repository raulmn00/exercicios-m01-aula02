const prompt = require("prompt-sync")();
console.clear();

let qtdVidaMonstro = +prompt("Digite quanto de vida o monstro possui: ");
let qtdDanoCausadoPorTurno = +prompt("Digite quanto de dano seu herói causa por turno: ");
let turnos = 0;

while(qtdVidaMonstro != 0){
    qtdVidaMonstro = qtdVidaMonstro-qtdDanoCausadoPorTurno;
    turnos++;
}

console.log(`Após ${turnos} turnos, você conseguiu derrotar o monstro!`);