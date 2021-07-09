import { useState } from "react"
import Poker from "./Poker"
import Full from "./Full"
import Escalera from "./Escalera"
import Numero from "./Numero"

const SumarPuntaje = ({onClick, dados}) => {

    const [categoria, setCategoria] = useState(null)
    const [puntaje, setPuntaje] = useState(null)

    const handleSumarClick = (event) => {
        event.preventDefault();
        console.log(categoria, puntaje)
        onClick(categoria, puntaje)
        setCategoria(null)
        setPuntaje(null)
    }

    return (
        <div className="btn-group-vertical">
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {1}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {2}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {3}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {4}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {5}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {6}/>
            <Poker dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} />
            <Full dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} />
            <Escalera dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} />
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSumarClick}>
                Sumar puntaje
            </button>
        </div>
    )
}

export default SumarPuntaje;