function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);


    if (qtd < 1) {
        alert(('Quantidade inválida! Por favor, insira um número maior que zero.'));

    } else {

    switch (tipo.value) {

        case 'pista':
            comprarPista(qtd);
            break;

        case 'inferior':
            comprarInferior(qtd);
            break;

        case 'superior':
            comprarSuperior(qtd);
            break;
    }


    }
        
 
};



function comprarPista(qtd) {

   

    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!')
    };

   

}


function comprarInferior(qtd) {

    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdInferior) {
        alert('Quantidade indisponível para o tipo inferior');

    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada com sucesso!');
    }

}


function comprarSuperior(qtd) {

    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (qtd > qtdSuperior) {
        alert('Quantidade indisponível para o tipo superior');

    }  else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada com sucesso!')

    }

}







