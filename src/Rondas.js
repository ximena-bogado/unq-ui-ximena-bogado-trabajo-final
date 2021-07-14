
const Rondas = ({tiros, turnos}) => {

    return (
        <div className = "texto-estadisticas mt-2">
            <p>
                Turnos restantes: {turnos}
            </p>
            <p>
                Tiradas restantes: {tiros}
            </p>
        </div>
    )
}

export default Rondas;