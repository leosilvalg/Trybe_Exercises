const primeiroNome = document.querySelector('#firstName');
const ultimoNome = document.querySelector('#lastName');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const rg = document.querySelector('#rg');
const endereco = document.querySelector('#address');
const cidade = document.querySelector('#city');
const resumo = document.querySelector('#resumo');
const ultimoEmprego = document.querySelector('#lastJob');
const descricao = document.querySelector('#description');

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
        rule: 'maxLength',
        value: 50,
    },
    {
        rule: 'required',
        errorMessage: 'Email is required',
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