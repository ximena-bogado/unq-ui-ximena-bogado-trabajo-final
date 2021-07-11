import { useState } from 'react';
import TablaDePuntaje from './TablaDePuntaje';
import TirarDados from './TirarDados';
import Rondas from './Rondas';
import SumarPuntaje from './SumarPuntaje';
import Error from './Error';
import PartidaFinalizada from './PartidaFinalizada';

const Generala = () => {

    const [dados, setDados] = useState([])
    const [tiros, setTiros] = useState(3)
    const [error, setError] = useState("")
    const [turnos, setTurnos] = useState(10)
    const [puntajes, setPuntajes] = useState({ 1: null, 2: null, 3: null, 4 : null,5 : null,6 : null,"poker" : null, "full" : null, "escalera" : null })

    const setPuntaje = (categoria, puntaje) => {
        if (puntajes[categoria] === null){
            setPuntajes(prevState => ({...prevState, [categoria]: puntaje}))
            setTiros(3)
            setTurnos(turnos - 1)
            setDados([])
            setError("")
        } else {
            console.log("ya se ingreso ese puntaje")
            setError(`ya se ingreso puntaje para la categoria ${categoria}`)
        }
    }

    return (
        <>
        <div className = "row">
            <div className = "col-2 my-2 mx-2">
                <TablaDePuntaje puntajes = {puntajes}/>
            </div>
            <div className = "col"></div>
            <div className = "col-4 my-2">
                <SumarPuntaje onClick = {setPuntaje} dados = {dados} setError = {setError}/>
            </div>
        </div>
        {!turnos ? <PartidaFinalizada /> :
            <div className = "row ">
                <Rondas tiros = {tiros} turnos = {turnos}/>
                <TirarDados tiros = {tiros} onClick = {setTiros} dados = {dados} setDados = {setDados} setError = {setError}/>
                {error && <Error error = {error}/>}
            </div>
        }
        </>
    )
}

export default Generala;