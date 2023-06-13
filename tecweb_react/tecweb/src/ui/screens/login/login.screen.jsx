import { useNavigate } from "react-router"
import './login.css'
import logo from '../../../assets/images/logo.png'


export const Login = () => {
    const navigation = useNavigate()
    
    return (
        <>
        <div className="black-bg">
            <section className="login-area">
                <div className="login">
                <div>
                    <a href="/home/index.html">
                    <img src={logo} alt="logo-pgrmin"/>
                    </a>
                </div>
            
                <form id="form">
                    <input id="name" type="text" name="name" placeholder="Username" autoFocus />
                    <input id="password" type="password" name="password" placeholder="Password" />
                    <input type="submit" value="Login" />
                </form>

                <p>Não possui uma conta? <a href="/signup" onClick={navigation("/signup")}>Registre-se</a>
                </p>
                </div>
            </section>
        </div>
        </>
    )
}