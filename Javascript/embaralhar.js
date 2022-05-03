// Juntar e embaralhando duas Strings.
function embaralhaString(valor1, valor2) {
    var embaralhar = '';
    valor1 = valor1.split('');
    valor2 = valor2.split('');
    while (valor1.length > 0 && valor2.length > 0) {
        embaralhar += valor1.splice(valor1.length * Math.random() << 0, 1) +
            valor2.splice(valor2.length * Math.random() << 0, 1);
    }
    return (embaralhar);
}

console.log(embaralhaString('abcd', 'efgh'));
console.log(embaralhaString('abcd', 'ef'));
console.log(embaralhaString('ab', 'efgh'));
