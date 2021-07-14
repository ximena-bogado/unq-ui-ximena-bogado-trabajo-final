import { useEffect, useState } from "react"
import DadoEnMano from "./DadoEnMano"
import DadoApartado from "./DadoApartado"
import cubilete from '../resources/cubilete.png'
import Rondas from '../Rondas';

const TirarDados = ({onClick, tiros, dados, setDados, setError, turnos}) => {

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
            chooseAndSetError();
        }
    }

    const chooseAndSetError = () => {
        if (!tiros) {
            setError("Ya no quedan tiradas. Seleccione una categoría y sume los puntos");
        } else {
            setError("Ya se apartaron todos los dados. Seleccione una categoría y sume los puntos");
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
            setError("Ya no quedan tiradas. Seleccione una categoría y sume los puntos")
        }
    }

    return (
        <>
            <div className = "dados-en-mano">  
                <div>
                    <img src = {cubilete} className="cubilete mt-2" alt = "generala"/>
                </div>
                <div className = "contenedor">
                    {dadosEnMano.map( dado => <DadoEnMano key = {`dado-${dado.index}`} num = {dado.numero} index = {dado.index} onClick = {selectDado}/>)}
                </div>
            </div>
            <div className = "tirar-dados my-2">
                <Rondas tiros = {tiros} turnos = {turnos}/>
                <button type="button" className="col-8 btn btn-secondary shadow-lg" onClick = {handleClick} >Tirar</button>
            </div>
            <div className = "dados-apartados">
                <p className = "mt-4 texto-estadisticas"> Dados apartados:</p>
                <div className = "contenedor">
                    {dadosApartados.map( dado => <DadoApartado key = {`dado-${dado.index}`} num = {dado.numero} index = {dado.index} onClick = {selectDado}/>)}
                </div>
            </div>
        </>
    )
}

export default TirarDados;


