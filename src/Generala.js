import { useState } from 'react';
import TablaDePuntaje from './tabla/TablaDePuntaje';
import TirarDados from './dados/TirarDados';
import SumarPuntaje from './sumarPuntaje/SumarPuntaje';
import Error from './Error';
import PartidaFinalizada from './PartidaFinalizada';
import generalaIcon from './resources/generala-icon.png'

const Generala = ({jugadoresInicial, setJugando}) => {

    const [dados, setDados] = useState([])
    const [tiros, setTiros] = useState(3)
    const [error, setError] = useState("")
    const [jugadores, setJugadores] = useState(jugadoresInicial)
    const [jugadorActual, setJugadorActual] = useState(0)

    const setPuntaje = (categoria, puntaje) => {
        if (jugadores[jugadorActual].puntajes[categoria] === null){
            jugadores[jugadorActual].puntajes[categoria] = puntaje
            jugadores[jugadorActual].turnos = jugadores[jugadorActual].turnos - 1
            setJugadores(jugadores)
            setJugadorActual((jugadorActual + 1) % (jugadoresInicial.length))
            setTiros(3)
            setDados([])
            setError("")
        } else {
            setError(`ya se ingreso puntaje para la categoria ${categoria}`)
        }
    }


    return (
        <>
            <img src = {generalaIcon} className="icon mt-2" alt = "generala"/>
            <h4 className = "barra-izquierda texto" >Puntajes</h4>
            <span className = "centro texto-centro"> <strong> Jugador actual:</strong> {jugadores[jugadorActual].nombre}</span>
            <h4 className = "barra-derecha texto">Categorias</h4>
            <div className = "tabla">
                <TablaDePuntaje jugadores = {jugadores} />
            </div>
            <div className = "sumar-puntaje">
                <SumarPuntaje onClick = {setPuntaje} dados = {dados} setError = {setError}/>
            </div>
            {!jugadores[jugadoresInicial.length - 1].turnos ? <PartidaFinalizada setJugando = {setJugando}/> :
                <>
                    <TirarDados tiros = {tiros} onClick = {setTiros} dados = {dados} setDados = {setDados} setError = {setError} turnos = {jugadores[jugadorActual].turnos}/>
                    {error && <Error error = {error}/>}
                </>
            }
        </>
    )
}

export default Generala;