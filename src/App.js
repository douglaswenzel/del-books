import './App.css';
import Logo from './componentes/logo'
import perfil from './img/perfil.svg'
import sacola from './img/sacola.svg'
import OpcoesHeader from './componentes/OpcoesHeader';
import IconesHeader from './componentes/IconesHeader';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
      </header>
    </div>
  );
}

export default App;
