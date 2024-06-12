let herois = ["Shakur", "Tupac"];

function calculadora(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

function classificao(){
    let nivel = 50;
    if(nivel < 10) {
        return "Ferro"
    } else if (nivel >= 11 && nivel <= 20) {
        return "Bronze"
    } else if (nivel >= 21 && nivel <= 50) {
        return "Prata"
    } else if (nivel >= 51 && nivel <= 80) {
        return "Ouro"
    } else if (nivel >= 81 && nivel <= 90) {
        return "Diamante"
    } else if (nivel >= 91 && nivel <= 100) {
        return "Lendário"
    } else if (nivel > 100) {
        return "Imortal"
    }
}

console.log(`O herói ${herois[0]} tem o saldo de ${calculadora(50, 12)} e está no nível de ${classificao()}`);