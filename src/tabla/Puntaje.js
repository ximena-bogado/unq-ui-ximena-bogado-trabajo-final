
const Puntaje = ({name, jugadores}) => {

    return (
        <tr >
            <th > {name} </th>
            {jugadores.map(jugador => <td key = {`${name}-${jugador.nombre}`}> {jugador.puntajes[name]} </td>)} 
        </tr>
    )
}

export default Puntaje;