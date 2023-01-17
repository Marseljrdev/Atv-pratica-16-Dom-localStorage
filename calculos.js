/* Desenvolva aqui a rotina */

// Totalizar os campos 1+2+3 no campo 4

// Totalizar os descontos 5+6 no campo 7


//2. Salvar os valores e cálculos no localStorage para quando a página
//  for carregada possamos recuperar estes valores e preencher
//  automaticamente os inputs.


let button = document.getElementById('btn_calcular');
button.addEventListener('click', () => {
    
    let valorBase = Number(document.getElementById('valor_base').value);
    document.getElementById('valor_base').addEventListener('blur', button.click);

    let valorTransporte = Number(document.getElementById('valor_transporte').value);
    document.getElementById('valor_transporte').addEventListener('blur', button.click);

    let valorAlimentacao = Number(document.getElementById('valor_alimentacao').value);
    document.getElementById('valor_alimentacao').addEventListener('blur', button.click);

    let valorAuto = Number(document.getElementById('valor_automovel').value);
    document.getElementById('valor_automovel').addEventListener('blur', button.click);
    
    let descontos = Number(document.getElementById('faltas').value);
    document.getElementById('faltas').addEventListener('blur', button.click);

    
    
    let result = 0;
    let result2 = 0;
    let result3 = 0;
    
    result = valorBase + valorTransporte + valorAlimentacao;
    localStorage.setItem('valorReceita', result);    
    
    result2 = valorAuto - ((valorAuto * descontos ) / 100);
    localStorage.setItem('valorDesconto', result2);

    result3 = result2 - result;
    localStorage.setItem('valorTotal', result3);
    
    document.getElementById('valor_receita').value = result;
    document.getElementById('valor_descontos').value = result2;
    document.getElementById('valor_total').value = result3;
    
    
})







    

