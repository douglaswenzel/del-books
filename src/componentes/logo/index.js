import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    flex-direction: row;
    padding: 25px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
    <LogoContainer>
        <LogoImage 
        src={logo}
        alt='Logo'
             />
        <p><strong>Delta</strong>Books</p>
    </LogoContainer>
    )
}

export default Logo