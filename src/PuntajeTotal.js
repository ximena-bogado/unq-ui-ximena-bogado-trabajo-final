import Puntaje from "./Puntaje"

const PuntajeTotal = ({puntajes}) => {

    const calcularTotal = () => {
        let total = 0
        const claves = [1,2,3,4,5,6,"poker","full","escalera"]
        claves.forEach(clave => {
            total = total + puntajes[clave]
        })
        return (total)
    }

    return (
        <Puntaje name = {"Total"} puntaje = {calcularTotal()} />
    )
}

export default PuntajeTotal;