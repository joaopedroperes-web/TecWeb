import { useNavigate } from 'react-router'
import './navbar.css'


export const Navbar = () => {
  
  const navigation = useNavigate()

  return (
    <>
      <nav className="nav-bar container">
        <a href="./index.html">
          <img className="nav-bar--logo"
              src="https://uploads-ssl.webflow.com/643555a120509a18b1817654/64355624c2464482e15d3880_PGRAMIN_IMG.png"
              alt="Logo PGRAMIN" />
        </a>
        <div className="nav-bar--buttons-wrapper">
          <button className="black-button" onClick={() => navigation("/login")}>Login</button>
          <button className="black-button" onClick={() => navigation("/signup")}>Registro</button>
        </div>
      </nav>
    </>)
}