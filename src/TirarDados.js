import { useEffect, useState } from "react"
import DadoEnMano from "./DadoEnMano"
import DadoApartado from "./DadoApartado"

const TirarDados = ({onClick, tiros, dados, setDados, setError}) => {

    const [selectedDados, setSelectedDados] = useState([0,1,2,3,4])
    const [dadosApartados, setDadosApartados] = useState([])
    const [dadosEnMano, setDadosEnMano] = useState(dados) 

    useEffect(() => {
        if (dados.length === 0) {
            setSelectedDados([0,1,2,3,4])
            setDadosApartados([])
            setDadosEnMano(dados)
        }
    }, [dados])

    const handleClick = (event) => {
        event.preventDefault();
        if (!!tiros && selectedDados.length > 0) {
            let nuevosDados = []
            selectedDados.forEach( index => {
                const numeroNuevo = random(1,6)
                dados[index] = {index: index, numero : numeroNuevo};
                nuevosDados = [...nuevosDados, {index: index, numero: numeroNuevo}]
            })
            setDadosEnMano(nuevosDados)
            setDados(dados)
            onClick(prevState => prevState - 1)
            setError("")
        } else {
            setError("No se seleccionaron dados")
        }
    }

    const random = (min, max) => {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    const selectDado = (index) => {
        if (!!tiros) {
        setSelectedDados( selectedDados.filter(dado => dado !== index))
        const dadoSeleccionado = dadosEnMano.find( dado => dado.index === index)
        setDadosApartados( prevState => [...prevState, dadoSeleccionado])
        setDadosEnMano(dadosEnMano.filter(dado => dado.index !== index))
        }else {
            setError("Ya no quedan tiradas. Seleccione una categoria y sume los puntos")
        }
    }

    return (
        <div className = "row">
            <div className = "row" >
            <div className = "col-4">
            
            <div className = "contenedor">
                {dadosEnMano.map( dado => <DadoEnMano key = {`dado-${dado.index}`} num = {dado.numero} index = {dado.index} onClick = {selectDado}/>)}
            </div>
            </div>
            <div className = "col">
            <div className = "my-2">
            <button type="button" className="btn btn-secondary" onClick = {handleClick} >Tirar dados</button>
            </div>
            
            </div>
            <div className = "col-4">
            <div className = "contenedor">
            {dadosApartados.map( dado => <DadoApartado key = {`dado-${dado.index}`} num = {dado.numero} index = {dado.index} onClick = {selectDado}/>)}
            </div>
            </div>
            </div>
        </div>
    )
}

export default TirarDados;