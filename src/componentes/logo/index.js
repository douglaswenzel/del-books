import './Logo.css'
import logo from '../../img/logo.svg'


function Logo() {
    return (
    <div className="Logo">
        <img 
        src={logo}
        className='logosvg'
        alt='Logo DeltaBooks'
             />
        <p><strong>Delta</strong> Books</p>
    </div>
    )
}

export default Logo