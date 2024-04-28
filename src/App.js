import './App.css';
import AcessPerms from './components/AcessPerms/AcessPerms'
import HelloWorld from './components/HelloWorld/HelloWorld';
import Props from './components/Props/Props';

function App() {
  
  return (
    <div className="App">
      <AcessPerms />
      <HelloWorld />
      <Props nome="Koenigsegg Jesko Absolut" vel={531} cor="branco" urlImage="https://wallpapercave.com/wp/wp4439121.jpg"/>
      <Props nome="Fiat Uno (Com escada)" vel={535} cor="Branco com adesivo da firma"/>
    </div>
  );
}

export default App;
