let nome, n, despesas, renda, i, soma = 0, sobra = 0;

nome = prompt("Digite seu nome:");

do {
    renda = Number(
        prompt("Digite sua renda mensal:")
    );
} while (isNaN(renda));

do {
    n = Number(
        prompt("Quantas despesas deseja informar? ")
    );
} while (isNaN(n));

if (n < 1) {
    n = 1;
}

if (n > 5) {
    n = 5;
}

for (i = 0; i < n; i++) {
    do {
        despesa = Number(
            prompt(`Digite o valor da ${i + 1}º despesa: `)
        );
    } while (isNaN(despesa));
    soma += despesa;
    sobra = renda - soma;
}
if (soma > renda) {
    alert("⚠️ Atenção: você gastou mais do que ganhou.");
}
else if (sobra >= renda * 0.3) {
    alert(`✅ Ótimo: você tem ${sobra} reais de sobra.`);
}
else {
    alert("🙂 Ok: dá para melhorar a sobra.");
}


console.log(`Nome do usuário: ${nome}`);
console.log(`Renda mensal do usuário: ${renda}`);
console.log(`Número de despesas do usuário: ${despesa}`);
console.log(`Total gasto em despesas pelo usuário: ${soma}`);