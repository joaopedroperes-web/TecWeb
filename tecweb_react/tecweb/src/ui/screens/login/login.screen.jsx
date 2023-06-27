import { useNavigate } from "react-router"
import $ from 'jquery'
import './login.css'
import logo from '../../../assets/images/logo.png'


export const Login = () => {
    const navigation = useNavigate()

    const mudarCor = () => {
        var botao = document.getElementById('botao');

        botao.style.backgroundColor = "#1E90FF";
    }



    const handleLoginFormSubmission = (event) => {

        var password = document.getElementById('password');
        var nome = document.getElementById('name');

        if (nome.value == "" || nome.value == null) {
            alert("Preencha o campo nome");
            nome.focus();
            return false;
        }

        if (password.value == "" || password.value == null) {
            alert("Preencha o campo senha");
            password.focus();
            return false;
        }

        event.preventDefault()

        var name = $('#name').val();
        var senha = $('#password').val();

        $.ajax({
            url: 'http://localhost:8080/www/salvar/www/verificar.php',
            type: 'POST',
            data: { nome: name, password: senha },
            success: function (response) {
                if (response.success) {
                    alert('Login realizado com sucesso!');
                    navigation("/jobs");
                } else {
                    alert('Ocorreu um erro durante o login: ' + response.error);
                }
            },
            error: function (xhr, status, error) {
                alert('Ocorreu um erro durante o login: ' + error);
            }
        });
    }

    return (
        <>
            <div className="black-bg">
                <section className="login-area">
                    <div className="login">
                        <div>
                            <a href="/" onClick={navigation("/")}>
                                <img src={logo} alt="logo-pgrmin" />
                            </a>
                        </div>

                        <form id="form" onSubmit={handleLoginFormSubmission}>
                            <input id="name" type="text" name="name" placeholder="Username" autoFocus onChange={mudarCor} />
                            <input id="password" type="password" name="password" placeholder="Password" />
                            <input id="botao" type="submit" value="Login" />
                        </form>

                        <p>Não possui uma conta? <a href="/signup" onClick={navigation("/signup")}>Registre-se</a>
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}