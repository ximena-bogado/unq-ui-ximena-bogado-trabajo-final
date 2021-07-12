
const PuntajeTotal = ({jugadores}) => {

    const calcularTotal = (puntajes) => {
        let total = 0
        const claves = [1,2,3,4,5,6,"Poker","Full","Escalera"]
        claves.forEach(clave => {
            total = total + puntajes[clave]
        })
        return (total)
    }

    return (
        <tr >
            <th > Total </th>
            {jugadores.map(jugador => <td key = {`puntajeTotal-${jugador.nombre}`}> {calcularTotal(jugador.puntajes)} </td>)} 
        </tr>
    )
}

export default PuntajeTotal;