import { useState } from "react";
import generalaIcon from './resources/generala-icon.png'

const Inicio = ({setJugadores, setJugando}) => {

    const [cantidadDejugadores, setCantidadDeJugadores] = useState(0)
    const [jugador, setJugador] = useState([])
    const [iniciar, setIniciar] = useState(false)

    const handleClick = numero => event => {
        event.preventDefault()
        setCantidadDeJugadores(numero)
        setIniciar(true)
    }

    const handleChange = name => event => {
        jugador[name] =  {nombre : event.target.value, puntajes : { 1: null, 2: null, 3: null, 4 : null,5 : null,6 : null,"Poker" : null, "Full" : null, "Escalera" : null }, turnos: 9}
        setJugador(jugador);
    };

    const handleConfirmSubmit = event => {
        event.preventDefault()
        if (jugador.length > 0){
            setJugadores(jugador)
            setJugador([])
            setJugando(true)
        }
    }

    return (
        <div className = "inicio">
            <div >
            <img src = {generalaIcon} width="300px" className="my-4" alt = "generala"/>
            </div>
            <div>
            <button type="button" className="btn btn-secondary my-4 mx-2" onClick = {handleClick(1)}>Solitario</button>
            <button type="button" className="btn btn-secondary my-4 mx-2" onClick = {handleClick(2)}>Dos jugadores</button>
            </div>
            <form onSubmit={handleConfirmSubmit}>
            {!!cantidadDejugadores &&
                <div >
                    <label htmlFor="validationDefaultUsername" className = "form-label my-2 text-white"> Jugador {1} </label>
                    <input className="form-control w-50 mx-auto" id="validationDefaultUsername" type="text" placeholder="Nombre de jugador 1" value={jugador[0]} aria-describedby="validationTooltipUsername1Prepend" required onChange={handleChange(0)}></input>
                </div>
            }
            {cantidadDejugadores === 2 &&
                <div>
                    <label htmlFor="validationDefaultUsername2" className = "form-label my-2 text-white"> Jugador {2} </label>
                    <input className="form-control w-50 mx-auto" id="validationDefaultUsername2" type="text" placeholder="Nombre de jugador 2" value={jugador[1]} aria-describedby="validationTooltipUsername2Prepend" required onChange={handleChange(1)}></input>
                </div>
            }
            <div>
            {iniciar && <button type="submit" className="btn btn-secondary my-4">Confirmar</button>}
            </div>
            </form>
        </div>
    )
}

export default Inicio;