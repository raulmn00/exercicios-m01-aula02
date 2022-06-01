const prompt = require("prompt-sync")();
console.clear();

/*
Etiqueta - Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda, o CEP na terceira e o telefone na quarta.

*/

let nome = prompt("Digite seu nome: ");
let endereco = prompt("Digite seu endereço: ");
let cep = prompt("Digite o seu CEP: ");
let telefone = prompt("Digite o seu telefone: ");

console.log(`Olá ${nome} tudo bem? \nVocê mora no endereço ${endereco} \nSeu CEP é ${cep} \nE seu número de telefone é ${telefone} `);