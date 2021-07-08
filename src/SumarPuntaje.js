import { useState } from "react"

const SumarPuntaje = ({onClick}) => {

    const [categoria, setCategoria] = useState(null)

    const handleSumarClick = (event) => {
        event.preventDefault();
        onClick(categoria)
    }

    const handleSelectClick = categoria => event => {
        event.preventDefault();
        setCategoria(categoria)
        console.log(categoria)
    }

    return (
        <div className="btn-group-vertical">
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick(1)}>1 </button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick(2)}>2</button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick(3)}>3</button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick(4)}>4</button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick(5)}>5</button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick(6)}>6</button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick("Poker")}>Poker</button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick("Full")}>Full</button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSelectClick("Escalera")}>Escalera</button>
            <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleSumarClick}>
                Sumar puntaje
            </button>
        </div>
    )
}

export default SumarPuntaje;