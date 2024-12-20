import './IconesHeader.css'
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'

const icones = [perfil, sacola]


function IconesHeader() {
    return(
        <ul className='icones'>
          { icones.map( (icone) => (
            <li className='icone'><img src={icone} alt='icone'/></li>
          ))}
        </ul>
    )

}

export default IconesHeader