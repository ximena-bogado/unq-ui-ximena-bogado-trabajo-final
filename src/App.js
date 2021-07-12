import { useState } from 'react';
import './App.css';
import Generala from './Generala';
import Inicio from './Inicio';


function App() {

  const [jugando, setJugando] = useState(false)
  const [jugadores, setJugadores] = useState([])

  return (
    <div className = "App">
    <div className = "container App min-vh-100">
      { jugando ?
      <Generala jugadoresInicial = {jugadores} setJugando = {setJugando}/>
      :<Inicio setJugadores = {setJugadores} setJugando = {setJugando}/>}
    </div>
    </div>
  );
}

export default App;
