import './OpcoesHeader.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OpcoesHeader() {
    return(
        <ul className='opcoes'>
        { textoOpcoes.map( (texto) => (
          <li className='opcao'><p>{texto}</p></li>
        ))}
      </ul>
    )
}

export default OpcoesHeader