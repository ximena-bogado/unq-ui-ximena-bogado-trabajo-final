
const Escalera = ({dados, setCategoria, setPuntaje}) => {

    const esEscalera = () => {
        const escalera = [2,3,4,5]
        let esEscalera = true
        escalera.forEach(numero =>
            esEscalera = esEscalera && dados.includes(numero)    
        )
        const contieneUnoOSeis = dados.includes(1) || dados.includes(6)
        return (esEscalera && contieneUnoOSeis)
    }

    const handleClick = (event) => {
        event.preventDefault();
        console.log(esEscalera())
        if (esEscalera()) {
            setCategoria("escalera")
            setPuntaje(20)
            console.log("se hizo el handleSelectClick")
        }
    }

    return (
        <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleClick}>Escalera</button>
    )
}

export default Escalera;