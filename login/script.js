const form = document.getElementById("form")

const passwordInput = document.getElementById("password")

const usernameInput = document.getElementById("name")


form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Validando o campo de nome
    if (!usernameInput.value) {
        alert("Por favor, insira um nome de usuário válido.");
        return;
    }

    // Validando o campo de senha
    if (!passwordInput.value) {
        alert("Por favor, insira uma senha válida.");
        return;
    }

    const usuarios = {
        "GusPLF": "123456",
    };

    if (usuarios[usernameInput.value] == passwordInput.value) {
        alert('Login bem-sucedido!');
        window.location.href = "../jobs/jobs.html";
    } else {
        alert('Nome de usuário ou senha inválidos!');
    }
})