import { useState } from "react"
import Poker from "./Poker"
import Full from "./Full"
import Escalera from "./Escalera"
import Numero from "./Numero"

const SumarPuntaje = ({onClick, dados, setError}) => {

    const [categoria, setCategoria] = useState(null)
    const [puntaje, setPuntaje] = useState(null)

    const handleSumarClick = (event) => {
        event.preventDefault();
        if (categoria) {
            onClick(categoria, puntaje)
            setCategoria(null)
            setPuntaje(null)
        }else {
            setError("No se selecciono ninguna categoria. Seleccione una categoria para sumar el puntaje")
        }
        
    }

    return (
        <div className="col btn-group-vertical">
            <h4 className = "text-white">Categorias</h4>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {1}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {2}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {3}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {4}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {5}/>
            <Numero dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} numero = {6}/>
            <Poker dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} />
            <Full dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} />
            <Escalera dados = {dados} setCategoria = {setCategoria} setPuntaje = {setPuntaje} />
                <button type = "button" className = "btn btn-secondary mb-2 " onClick = {handleSumarClick}>
                    Sumar puntaje
                </button>
        </div>
    )
}

export default SumarPuntaje;