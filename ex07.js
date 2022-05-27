const prompt = require("prompt-sync")();
console.clear();

let valorComanda = +prompt("Digite qual o valor da sua comanda por favor: ");
let taxaGarcom = valorComanda * 0.1;
let valorTotal = valorComanda + taxaGarcom;

console.log(`Caro cliente, sua conta foi de R$ ${(valorComanda).toFixed(2)} reais e o valor pago para o garçom de R$ ${(taxaGarcom).toFixed(2)} reais!`);
console.log(`Portanto, sua conta deu um total de R$ ${(valorTotal).toFixed(2)} reais.`);