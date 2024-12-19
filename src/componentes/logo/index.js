import './Logo.css'
import logo from '../../img/logo.svg'
function Logo() {
    return (
    <div className="Logo">
        <img src={logo} alt="Logotipo Delta-Books" />
        <p>Delta Books</p>
    </div>
    )
}

export default Logo