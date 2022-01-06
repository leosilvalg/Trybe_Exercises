const botaoEnviar = document.querySelector('#botaoEnvia');
const resumoPronto = document.querySelector('#resumoPronto');
const form = document.querySelector('#form');

function criaEstado () {
  let estados = document.querySelector('#state');
  let todosEstados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < todosEstados.length; i += 1) {
      let option = document.createElement('option');
      option.innerText = todosEstados[i];
      option.value = todosEstados[i];
      estados.appendChild(option);
  }
}
criaEstado();

function cabecalho() {
  let head = document.createElement('h1');
  let text = "Resumo do Currículo";
  head.innerHTML = text;
  resumoPronto.appendChild(head);
}

function nome() {
  let primeiroNome = document.querySelector('#firstName').value;
  let ultimoNome = document.querySelector('#lastName').value;
  let nomeParagrafo = document.createElement('p');
  nomeParagrafo.innerHTML = `Full name: ${primeiroNome} ${ultimoNome}`;
  resumoPronto.appendChild(nomeParagrafo);
}

function email() {
  let email = document.querySelector('#email').value;
  let emailParagrafo = document.createElement('p');
  emailParagrafo.innerHTML = `Email: ${email}`;
  resumoPronto.appendChild(emailParagrafo);
}

function documentos () {
  let cpf = document.querySelector('#cpf').value;
  let rg = document.querySelector('#rg').value;
  let cpfParagrafo = document.createElement('p');
  let rgParagrafo = document.createElement('p');
  cpfParagrafo.innerHTML = `CPF: ${cpf}`;
  resumoPronto.appendChild(cpfParagrafo);
  rgParagrafo.innerHTML = `RG: ${rg}`;
  resumoPronto.appendChild(rgParagrafo);
}

function address() {
  let endereco = document.querySelector('#address').value;
  let enderecoParagrafo = document.createElement('p');
  enderecoParagrafo.innerHTML = `Address: ${endereco}`;
  resumoPronto.appendChild(enderecoParagrafo);
}

function state() {
  let estado = document.querySelector('#state').value;
  let estadoParagrafo = document.createElement('p');
  estadoParagrafo.innerHTML = `State: ${estado}`;
  resumoPronto.appendChild(estadoParagrafo);
}

function cidade() {
  let cidade = document.querySelector('#city').value;
  let cidadeParagrafo = document.createElement('p');
  cidadeParagrafo.innerHTML = `City: ${cidade}`;
  resumoPronto.appendChild(cidadeParagrafo);
}

function resumoTrabalho() {
  let resumo = document.querySelector('#resumo').value;
  let resumoParagrafo = document.createElement('p');
  resumoParagrafo.innerHTML = `Resumo: ${resumo}`;
  resumoPronto.appendChild(resumoParagrafo);
}

function lastJob() {
  let ultimoEmprego = document.querySelector('#lastJob').value;
  let resumoJob = document.createElement('p');
  resumoJob.innerHTML = `Last job: ${ultimoEmprego}`;
  resumoPronto.appendChild(resumoJob);
}

function description() {
  let descricao = document.querySelector('#description').value;
  let descricaoParagrafo = document.createElement('p');
  descricaoParagrafo.innerHTML = `Job description: ${descricao}`;
  resumoPronto.appendChild(descricaoParagrafo);
}

function date() {
  let dataInicio = document.querySelector('#startDate').value;
  let dataFinal = document.querySelector('#endDate').value;
  let dataParagrafo = document.createElement('p');
  dataParagrafo.innerHTML = `Time on Job: ${dataInicio} till ${dataFinal}`;
  resumoPronto.appendChild(dataParagrafo);
}

function envia (event) {
  event.preventDefault();
  cabecalho();
  nome();
  email();
  documentos();
  address();
  state();
  cidade();
  resumoTrabalho();
  lastJob();
  description();
  date();
}

botaoEnviar.addEventListener('click', envia);

const validate = new window.JustValidate('#form');

validate.addField('#firstName', [
    {
        rule: 'maxLength',
        value: 20,
    },
    {
        rule: 'required',
        errorMessage: 'First name is required',
    },
]);
validate.addField('#lastName', [
    {
        rule: 'maxLength',
        value: 20,
    },
    {
        rule: 'required',
        errorMessage: 'Last name is required',
    },
]);
validate.addField('#email', [
    {
        rule: 'required',
        errorMessage: 'Email is required',
    },
    {
        rule: 'email',
        errorMessage: 'Invalid!',
    },
]);
validate.addField('#cpf', [
    {
        rule: 'maxLength',
        value: 11,
    },
    {
        rule: 'required',
        errorMessage: 'CPF is required',
    },
]);
validate.addField('#rg', [
    {
        rule: 'maxLength',
        value: 11,
    },
    {
        rule: 'required',
        errorMessage: 'RG is required',
    },
]);
validate.addField('#firstName', [
    {
        rule: 'maxLength',
        value: 20,
    },
    {
        rule: 'required',
        errorMessage: 'First name is required',
    },
]);
validate.addField('#address', [
    {
        rule: 'maxLength',
        value: 200,
    },
    {
        rule: 'required',
        errorMessage: 'Address is required',
    },
]);
validate.addField('#state', [
    {
        rule: 'required',
        errorMessage: 'State is required',
    },
]);
validate.addField('#city', [
    {
        rule: 'maxLength',
        value: 28,
    },
    {
        rule: 'required',
        errorMessage: 'City is required',
    },
]);
validate.addField('#lastJob', [
    {
        rule: 'maxLength',
        value: 40,
    },
    {
        rule: 'required',
        errorMessage: 'Last job is required',
    },
]);
validate.addField('#description', [
    {
        rule: 'maxLength',
        value: 500,
    },
    {
        rule: 'required',
        errorMessage: 'Description is required',
    },
]);
validate.addField('#startDate', [
    {
        rule: 'required',
        errorMessage: 'Start date is required',
    },
]);
validate.addField('#endDate', [
    {
        rule: 'required',
        errorMessage: 'End date is required',
    },
]);