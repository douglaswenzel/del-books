import Logo from '../logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import style from 'styled-components'

const HeaderContainer = style.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header