const prompt = require("prompt-sync")();
console.clear();
console.log(`
CADASTRO DE CLIENTES 
ESCOLHA UMA OPÇÃO:
[1]- Saudação olá
[2]- Saudação Bom dia
[3]- Saudação Boa tarde
[4]- Saudação Boa noite`);

let opcao = prompt("Digite sua opção: ");
if (opcao == 1) {
  console.log("Olá!");
} else if (opcao == 2) {
  console.log("Bom dia!");
} else if (opcao == 3) {
  console.log("Boa tarde!");
} else if (opcao == 4) {
  console.log("Boa noite!");
}
