function salvarFormulario() {
    const formulario = document.querySelector("#formulario");
    const nomeInput = document.querySelector("#nome");
    const sobrenomeInput = document.querySelector("#sobrenome");
    const emailInput = document.querySelector("#email");
    const telInput = document.querySelector("#tel");
    const checkinInput = document.querySelector("#checkin"); 
    const checkoutInput = document.querySelector("#checkout");
    const senhaInput = document.querySelector("#senha");
    const confirmarsenhaInput = document.querySelector("#confirmarsenha");
    const pessoa = [];

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        if (nomeInput.value === "") {
            alert("Por Favor, preencha seu Nome");
            return;
        }

        if (sobrenomeInput.value === "") {
            alert("Por Favor, preencha seu Sobrenome");
            return;
        }

        if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
            alert("Por Favor, preencha um E-mail válido");
            return;
        }

        if (telInput.value === "") {
            alert("Por Favor, preencha seu Telefone");
            return;
        }

        if (!validatePassword(senhaInput.value, 8)) {
            alert("A Senha precisa ter no mínimo 8 caracteres.");
            return;
        }

        if (senhaInput.value !== confirmarsenhaInput.value) {
            alert("As senhas não conferem. Por favor, verifique.");
            return;
        }

        pessoa.push({
            nome: nomeInput.value,
            sobrenome: sobrenomeInput.value,
            email: emailInput.value,
            telefone: telInput.value,
            checkin: checkinInput.value,
            checkout: checkoutInput.value,
            senha: senhaInput.value,
            confirmarsenha: confirmarsenhaInput.value
        });

        console.log(pessoa);
    
    });
}

// Chamar a função salvarFormulario após defini-la
salvarFormulario();

function isEmailValid(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password, minDigits) {
    return password.length >= minDigits;
}
