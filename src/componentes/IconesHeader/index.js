import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'
import style from 'styled-components'

const Icone = style.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = style.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil, sacola]


function IconesHeader() {
    return(
        <Icones>
          { icones.map( (icone) => (
            <Icone><img src={icone} alt='icone'/></Icone>
          ))}
        </Icones>
    )

}

export default IconesHeader