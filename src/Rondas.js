import cubilete from './resources/cubilete.png'

const Rondas = ({tiros, turnos}) => {

    return (
        <div className = "row">
        <div className = "col-4">
        <img src = {cubilete} width="70" className="mt-2" alt = "generala"/>
        </div>
        <div className = "col text-white mt-2">
            <p>
                <strong>Turnos restantes: {turnos}</strong>
            </p>
            <p>
                <strong>Tiradas restantes: {tiros}</strong>
            </p>
        </div>
        <div className = "col-4">
        <p className = "mt-4 text-white"> <strong>Dados apartados:</strong></p>
        </div>
        </div>
    )
}

export default Rondas;