import './App.css';
import AcessPerms from './components/AcessPerms'
import HelloWorld from './components/HelloWorld';
import Props from './components/Props';

function App() {
  
  return (
    <div className="App">
      <AcessPerms />
      <HelloWorld />
      <Props nome="Koenigsegg Jesko Absolut" vel="531 Km/h" cor="preto"/>
    </div>
  );
}

export default App;
