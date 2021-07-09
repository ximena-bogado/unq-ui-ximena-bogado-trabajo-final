import { useState } from 'react';
import TablaDePuntaje from './TablaDePuntaje';
import TirarDados from './TirarDados';
import Rondas from './Rondas';
import SumarPuntaje from './SumarPuntaje';

const Generala = () => {

    const [dados, setDados] = useState([])
    const [tiros, setTiros] = useState(3)
    const [puntajes, setPuntajes] = useState({ 1: "", 2: "", 3: "", 4 : "",5 : "",6 : "","poker" : "", "full" : "", "escalera" : "" })

    const setPuntaje = (categoria, puntaje) => {
        console.log(puntaje)
        console.log(categoria)
        setPuntajes(prevState => ({...prevState, [categoria]: puntaje}))
        setTiros(3)
        setDados([])
    }

    return (
        <>
        <div className = "row">
            <div className = "col-2 my-2 mx-2">
                <TablaDePuntaje puntajes = {puntajes}/>
            </div>
            <div className = "col ">
                <Rondas tiros = {tiros}/>
                <TirarDados tiros = {tiros} onClick = {setTiros} dados = {dados} setDados = {setDados}/>
            </div>
            <div className = "col-2 my-2">
                <SumarPuntaje onClick = {setPuntaje} dados = {dados}/>
            </div>
        </div>
        </>
    )
}

export default Generala;