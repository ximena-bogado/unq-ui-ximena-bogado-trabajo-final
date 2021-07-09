import { useEffect, useState } from "react"
import Dado from "./Dado"

const TirarDados = ({onClick, tiros, dados, setDados, setError}) => {

    const [selectedDados, setSelectedDados] = useState([0,1,2,3,4])
    let index = 0;

    useEffect(() => {
        if (dados.length === 0) {
            setSelectedDados([0,1,2,3,4])
        }
    }, [dados])

    const handleClick = () => {
        console.log(selectedDados)
        if (!!tiros && selectedDados.length > 0) {
            selectedDados.map( index => 
                dados[index] = random(1,6)
            )
            setDados(dados)
            onClick( prevState => prevState - 1)
            setSelectedDados([])
            setError("")
            console.log(dados)
        } else {
            console.log("no se realizo la tirada")
            setError("No se seleccionaron dados")
        }
    }

    const random = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const selectDado = (index) => {
        if (!!tiros) {
        setSelectedDados( prevState => [...prevState, index])
        dados[index] = null;
        setDados(dados)
        }else {
            setError("Ya no quedan tiradas. Seleccione una categoria y sume los puntos")
        }
    }

    return (
        <div>
            <div className = "my-4">
            <button type="button" className="btn btn-secondary" onClick = {handleClick} >Tirar dados</button>
            </div>
            <div>
            {dados.map( dado => <Dado key = {`dado-${index++}`} num = {dado} index = {index} onClick = {selectDado}/>)}
            </div>
        </div>
    )
}

export default TirarDados;