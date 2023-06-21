import { useNavigate } from "react-router"
import $ from 'jquery'
import './signup.css'
import logo from '../../../assets/images/logo.png'

export const SignUp = () => {
    const navigation = useNavigate()

    const handleSignUpFormSubmission = (event) => {
        event.preventDefault()

        var name = $('#name').val();
        var emaill = $('#email').val();
        var senha = $('#password').val()

        $.ajax({
            url: 'http://localhost:8080/www/salvar/www/salvar.php',
            type: 'POST',
            data: { nome: name, email: emaill, password: senha },
            success: function (response) {
                if (response.success) {
                    alert('Cadastro realizado com sucesso!');
                    navigation("/login");
                } else {
                    alert('Ocorreu um erro durante o cadastro: ' + response.error);
                }
            },
            error: function (xhr, status, error) {
                alert('Ocorreu um erro durante o cadastro: ' + error);
            }
        });
    }

    return (
        <div className='black-bg'>
            <section className="register-area">
                <div className="register">
                    <div>
                        <a href="/" onClick={navigation("/")}>
                            <img src={logo} />
                        </a>
                    </div>
                    <form id="form" onSubmit={handleSignUpFormSubmission}>
                        <input type="text" name="name" id="name" placeholder="Username" autoFocus />
                        <input type="email" name="email" id="email" placeholder="Email" autoFocus />
                        <input type="password" name="password" id="password" placeholder="Password" autoFocus />
                        <input type="submit" value="Register" id="submit" />
                    </form>
                    <p>Já possui uma conta? <a href="/login" onClick={navigation("/login")}>Login</a> </p>
                </div>
            </section>
        </div>
    )
}