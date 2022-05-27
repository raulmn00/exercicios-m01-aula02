const prompt = require("prompt-sync")();
console.clear();

let valorCompra = +prompt("Digite o valor total da compra: ");
let valorPago = +prompt("Digite o valor que foi pago: ");

let troco = valorPago - valorCompra;

console.log(`
Sua compra foi no total de R$ ${(valorCompra).toFixed(2)} reais
 e você pagou R$ ${(valorPago).toFixed(2)} reais,
 portanto, seu troco é de R$ ${(troco).toFixed(2)} reais.`);