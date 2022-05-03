// Hash de string
function contaOcorrencias(valor) {
    var valor = valor.match(/([\w\*]+)/g); // regex
    var resultado = valor.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {}); // reduce

    console.log(resultado);
}

contaOcorrencias("asa bola casa asa bola asa");
