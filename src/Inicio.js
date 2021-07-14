import { isValidElement, useState } from "react";
import generalaIcon from './resources/generala-icon.png'
import Error from "./Error";

const Inicio = ({setJugadores, setJugando}) => {

    const [cantidadDejugadores, setCantidadDeJugadores] = useState(0)
    const [nombres, setNombres] = useState({0: "", 1: ""})
    const [iniciar, setIniciar] = useState(false)
    const [error, setError] = useState("")

    const handleClick = numero => event => {
        event.preventDefault()
        setCantidadDeJugadores(numero)
        setIniciar(true)
    }

    const handleChange = name => event => {
        setNombres(prevState => ({...prevState, [name]: event.target.value}))
    };

    const handleConfirmSubmit = event => {
        event.preventDefault()
        if (isValid()){
            confirmarJugadores()
            setNombres({0: "", 1: ""})
            setJugando(true)
        }else {
            setNombres({0: "", 1: ""})
            setError("Los nombres deben ser distintos")
        }
    }

    const confirmarJugadores = () => {
        const jugadores = []
        for (let i = 0; i < cantidadDejugadores; i++){
            if(nombres[i]) {
                jugadores[i] = {nombre : nombres[i], puntajes : { 1: null, 2: null, 3: null, 4 : null,5 : null,6 : null,"Poker" : null, "Full" : null, "Escalera" : null }, turnos: 9}
            }
        }
        setJugadores(jugadores)
    }

    const isValid = () => {
        return ( nombres[0] !== nombres[1])
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
                    <input className="form-control w-50 mx-auto" id="validationDefaultUsername" type="text" placeholder="Nombre de jugador 1" value={nombres[0]} aria-describedby="validationTooltipUsername1Prepend" required onChange={handleChange(0)}></input>
                </div>
            }
            {cantidadDejugadores === 2 &&
                <div>
                    <label htmlFor="validationDefaultUsername2" className = "form-label my-2 text-white"> Jugador {2} </label>
                    <input className="form-control w-50 mx-auto" id="validationDefaultUsername2" type="text" placeholder="Nombre de jugador 2" value={nombres[1]} aria-describedby="validationTooltipUsername2Prepend" required onChange={handleChange(1)}></input>
                </div>
            }
            <div>
            {iniciar && <button type="submit" className="btn btn-secondary my-4">Confirmar</button>}
            </div>
            </form>
            {error && <Error error = {error}/>}
        </div>
    )
}

export default Inicio;