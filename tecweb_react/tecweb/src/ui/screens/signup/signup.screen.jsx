import './signup.css'
import logo from '../../../assets/images/logo.png'

export const SignUp = () => {
    
    const handleSignUpFormSubmission = () => {

    }

    return (
        <div className='black-bg'>
            <section className="register-area">
                <div className="register">
                    <div>
                        <a href="/home/index.html"><img src={logo} /></a>
                    </div>
                    <form id="form" onSubmit={handleSignUpFormSubmission}>
                        <input type="text" name="name" id="name" placeholder="Username" autoFocus />
                        <input type="email" name="email" id="email" placeholder="Email" autoFocus />
                        <input type="password" name="password" id="password" placeholder="Password" autoFocus />
                        <input type="submit" value="Register" id="submit" />
                    </form>
                    <p>Já possui uma conta? <a href="../login/login.html">Login</a> </p>
                </div>
            </section>
        </div>
    )
}