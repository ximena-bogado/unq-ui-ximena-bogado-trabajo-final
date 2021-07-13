import cubilete from './resources/cubilete.png'

const Rondas = ({tiros, turnos}) => {

    return (
        <>
        <div className = "text-white mt-2">
            <p>
                <strong>Turnos restantes: {turnos}</strong>
            </p>
            <p>
                <strong>Tiradas restantes: {tiros}</strong>
            </p>
        </div>
        </>
    )
}

export default Rondas;