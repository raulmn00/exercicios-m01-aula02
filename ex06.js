const prompt = require("prompt-sync")();
console.clear();
/*
Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).
*/

let qtdVidaMonstro = +prompt("Digite quanto de vida o monstro possui: ");
let qtdDanoCausadoPorTurno = +prompt("Digite quanto de dano seu herói causa por turno: ");
let turnos = 0;

while(qtdVidaMonstro != 0){
    qtdVidaMonstro = qtdVidaMonstro-qtdDanoCausadoPorTurno;
    turnos++;
}

console.log(`Após ${turnos} turnos, você conseguiu derrotar o monstro!`);