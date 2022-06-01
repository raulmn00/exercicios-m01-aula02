const prompt = require("prompt-sync")();
console.clear();

/*
 Qual o valor do troco? - Crie um programa que calcule o troco de uma compra no valor de R$100,98 e que foi paga com R$150,00. O valor do troco deve ser exibido no console.

*/

let valorCompra = +prompt("Digite o valor total da compra: ");
let valorPago = +prompt("Digite o valor que foi pago: ");

let troco = valorPago - valorCompra;

console.log(`
Sua compra foi no total de R$ ${(valorCompra).toFixed(2)} reais
 e você pagou R$ ${(valorPago).toFixed(2)} reais,
 portanto, seu troco é de R$ ${(troco).toFixed(2)} reais.`);