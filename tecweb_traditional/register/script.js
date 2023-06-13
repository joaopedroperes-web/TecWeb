const form = document.getElementById("form")

const emailInput = document.getElementById("email")

const passwordInput = document.getElementById("password")

const usernameInput = document.getElementById("name")


form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validando o campo de nome
    if (!usernameInput.value) {
        alert("Por favor, insira um nome de usuário válido.");
        return;
    }

    // Validando o campo de email
    if (!emailInput.value) {
        alert("Por favor, insira um email válido.");
        return;
    }

    // Validando o campo de senha
    if (!passwordInput.value) {
        alert("Por favor, insira uma senha válida.");
        return;
    }

    alert("Formulário enviado com sucesso!");
    window.location.href = "../login/login.html";
})