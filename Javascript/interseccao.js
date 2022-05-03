// Interseção entre os dois intervalos. Exemplo 1:
function verificaInterseccao(d1, d2, d3, d4) {
    var result = '';

    if (d1 > d3 && d1 < d4) {
        result = 'verdadeiro';
    } else if (d2 > d3 && d2 < d4) {
        result = 'verdadeiro';
    } else if (d3 < d2 && d3 > d1) {
        result = 'verdadeiro';
    } else if (d4 < d2 && d4 > d1) {
        result = 'verdadeiro';
    } else {
        result = 'falso';
    }

    console.log(`'${d1}', '${d2}', '${d3}', ${d4}`, result);
}

verificaInterseccao('01/12/2013', '20/12/2013', '15/12/2013', '31/12/2013');
verificaInterseccao('01/12/2013', '15/12/2013', '20/12/2013', '31/12/2013');

// Interseção entre os dois intervalos. Exerplo 2:
var date1 = '01/12/2013';
var date2 = '15/12/2013';
var date3 = '20/12/2013';
var date4 = '31/12/2013';
var result = true;
if (date1 > date3 && date1 < date4) {
    result;
} else if (date2 > date3 && date2 < date4) {
    result;
} else if (date3 < date2 && date3 > date1) {
    result;
} else if (date4 < date2 && date4 > date1) {
    result;
} else {
    result = false;
}

console.log(result);
