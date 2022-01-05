 const resume = document.querySelector('#resumo');
 const enviar = document.querySelector("#botaoEnvia");
 const date = document.querySelector("#data");


//Criando os estados
function criaEstado () {
    let estados = document.querySelector('#estados');
    let todosEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let i = 0; i < todosEstados.length; i += 1) {
        let option = document.createElement('option');
        option.innerText = todosEstados[i];
        option.value = todosEstados[i];
        estados.appendChild(option);
    }
}
criaEstado();

function cabecalho () {
    const texto = "Informações Pessoais";
    const tag = document.createElement('h1');
    tag.innerText = texto;
    resume.appendChild(tag);
}
cabecalho();

//
function checaData () {
    let data = date.value;
    let dia = data[0] + data[1];
    let mes = data[2] + data[3];
    let ano = data[4] + data[5] + data[6] + data[7];
    if ( dia <= 0 || dia > 31) {
        alert("Dia inválido !");
    } else if ( mes < 1 || mes > 12) {
        alert("Mes inválido!");
    } else if (ano <= 0) {
        alert("Ano inválido!");
    } else {
        return `${dia}/${mes}/${ano}`;
    }
}
checaData();

function submit () {
    cabecalho();
}

enviar.addEventListener('click', submit);


