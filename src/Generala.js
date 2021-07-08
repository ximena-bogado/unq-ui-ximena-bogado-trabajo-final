import { useState } from 'react';
import TablaDePuntaje from './TablaDePuntaje';
import TirarDados from './TirarDados';
import Rondas from './Rondas';
import SumarPuntaje from './SumarPuntaje';

const Generala = () => {

    const [tiros, setTiros] = useState(3)

    const setPuntaje = (categoria) => {
        setTiros(3)
    }

    return (
        <>
        <div className = "row">
            <div className = "col-2 my-2 mx-2">
                <TablaDePuntaje />
            </div>
            <div className = "col ">
                <Rondas tiros = {tiros}/>
                <TirarDados tiros = {tiros} onClick = {setTiros}/>
            </div>
            <div className = "col-2 my-2">
                <SumarPuntaje onClick = {setPuntaje}/>
            </div>
        </div>
        </>
    )
}

export default Generala;