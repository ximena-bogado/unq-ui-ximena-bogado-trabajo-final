import { useState } from 'react';
import './App.css';
import Generala from './Generala';
import Inicio from './Inicio';


function App() {

  const [jugando, setJugando] = useState(false)
  const [jugadores, setJugadores] = useState([])

  return (
    <div className = "App contenedor-p">
      { jugando ?
      <Generala jugadoresInicial = {jugadores} setJugando = {setJugando}/>
      :<Inicio setJugadores = {setJugadores} setJugando = {setJugando}/>}
    </div>
  );
}

export default App;
