let inputCPF = document.getElementById("cpfUsuario");
let inputCEP = document.getElementById("cepUsuario");
let inputNumCartao = document.getElementById("numCartao");
let inputcodCartao = document.getElementById("codCartao");
let inputOkSenha = document.getElementById("confiSenhaUsuario");
let inputSenha = document.getElementById("senhaUsuario");
let inputEndereco = document.getElementById("enderecoUsuario");
let inputBairro = document.getElementById("bairroUsuario");
let inputCidade = document.getElementById("cidadeUsuario");
let selectEstado = document.getElementsByTagName("estadoUsuario");
function buscarCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(dados =>{
        if(dados.erro){
            return inputCEP.setAttribute("class", "form-control is-invalid")
        }
        inputCEP.setAttribute("class", "form-control is-valid")
        inputEndereco.value = dados.logradouro;
        inputBairro.value = dados.bairro;
        inputCidade.value = dados.localidade;
        selectEstado.value = dados.uf;

    })
}

inputCPF.addEventListener('keyup', (event) => {
    if (isNaN(inputCPF.value) || inputCPF.value.length > 11) {
        inputCPF.value = inputCPF.value.substring(0, (inputCPF.value.length - 1));
    }
    if (inputCPF.value.length > 11) {
        inputCPF.value = inputCPF.value.substring(0, 11);
    }
});

inputCEP.addEventListener("keyup", (event) => {
    if (isNaN(inputCEP.value) || inputCEP.value.length > 8) {
        inputCEP.value = inputCEP.value.substring(0, (inputCEP.value.length - 1));
    }
    if (inputCEP.value.length >= 8) {
        inputCEP.value = inputCEP.value.substring(0, 8)
        buscarCep(inputCEP.value)
    }

});

inputNumCartao.addEventListener("keyup", (event) => {
    if (isNaN(inputNumCartao.value) || inputNumCartao.value.length > 16) {
        inputNumCartao.value = inputNumCartao.value.substring(0, (inputNumCartao.value.length - 1));
    }
    if (inputNumCartao.value.length > 16) {
        inputNumCartao.value = inputNumCartao.value.substring(0, 16)
    }

});
inputcodCartao.addEventListener("keyup", (event) => {
    if (isNaN(inputcodCartao.value) || inputcodCartao.value.length > 3) {
        inputcodCartao.value = inputcodCartao.value.substring(0, (inputcodCartao.value.length - 1));
    }
    if (inputcodCartao.value.length > 3) {
        inputcodCartao.value = inputcodCartao.value.substring(0, 3)
    }

});

inputOkSenha.addEventListener('keyup', (e) => {
    if (inputOkSenha.value != inputSenha.value && inputOkSenha.value != "") {
        inputOkSenha.setAttribute('class', 'form-control is-invalid')
    } else {
        inputOkSenha.setAttribute('class', 'form-control is-valid')
    }
})

