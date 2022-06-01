const prompt = require("prompt-sync")();
console.clear();

/* 
E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou R$ 42,54. Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. Por fim defina uma variável que será responsável pelo cálculo do valor total da conta e exiba-o no console com a seguinte formatação: R$99.99 (valor com duas casas decimais).
*/


let valorComanda = +prompt("Digite qual o valor da sua comanda por favor: ");
let taxaGarcom = valorComanda * 0.1;
let valorTotal = valorComanda + taxaGarcom;

console.log(`Caro cliente, sua conta foi de R$ ${(valorComanda).toFixed(2)} reais e o valor pago para o garçom de R$ ${(taxaGarcom).toFixed(2)} reais!`);
console.log(`Portanto, sua conta deu um total de R$ ${(valorTotal).toFixed(2)} reais.`);