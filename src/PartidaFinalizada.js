 
 const PartidaFinalizada = ({setJugando}) => {

    const handleClick = (event) => {
        event.preventDefault()
        setJugando(false)
    }

    return (
        <div className = "partida-finalizada">
            <h4 className = "my-4 text-white">La partida ha finalizado ¿Quiere volver a jugar?</h4>
            <button type = "button" className = "col-4 shadow-lg btn btn-secondary mb-2 " onClick = {handleClick} >Partida nueva</button>
        </div>
    )
 }

 export default PartidaFinalizada