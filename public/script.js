let nome, despesas, renda;

nome = prompt("Digite seu nome:");

do {
    renda = Number(
        prompt("Digite sua renda mensal:")
);
} while (isNaN(renda));


despesas = Number(
    prompt("Quantas despesas deseja informar?")
);

if (despesas < 1) {
    despesas = 1;
}

if (despesas > 5) {
    despesas = 5;
}

console.log(nome);
console.log(renda);
console.log(despesas);