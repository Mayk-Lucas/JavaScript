// Função para formatar data para BR.
function dataFormatada() {
    var data = new Date(),
        dia = data.getDate().toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
}

console.log(dataFormatada());
