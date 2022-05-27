const prompt = require("prompt-sync")();
console.clear();

let nome = prompt("Digite seu nome: ");
let endereco = prompt("Digite seu endereço: ");
let cep = prompt("Digite o seu CEP: ");
let telefone = prompt("Digite o seu telefone: ");

console.log(`Olá ${nome} tudo bem? \nVocê mora no endereço ${endereco} \nSeu CEP é ${cep} \nE seu número de telefone é ${telefone} `);