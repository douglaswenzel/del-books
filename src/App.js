import './App.css';
import Logo from './componentes/logo'
import perfil from './img/perfil.svg'
import sacola from './img/sacola.svg'
import OpcoesHeader from './componentes/OpcoesHeader';


const icones = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>

        <ul className='icones'>
          { icones.map( (icone) => (
            <li className='icone'><img src={icone} alt='icone'/></li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
