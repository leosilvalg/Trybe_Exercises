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