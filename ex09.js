const prompt = require("prompt-sync")();
console.clear();
/*
Conversor de moedas - Crie um programa que solicite um um valor em real ao usuário e converta esse valor, para dólar.
*/

let valorReal = +prompt("Digite um valor em Reais Brasileiros R$: ");
let valorDollar = valorReal / 4.73;

console.log(`O valor em Reais Brasileiros de R$ ${(valorReal).toFixed(2)} reais,
equivale a U$ ${(valorDollar).toFixed(2)} Dólares Americanos.`);