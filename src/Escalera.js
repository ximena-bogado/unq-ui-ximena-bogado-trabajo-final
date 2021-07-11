
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
        } else {
            setCategoria("escalera")
            setPuntaje(0)
        }
    }

    return (
        <button type = "button" className = "text-white border-white btn btn-outline-secondary mb-2" onClick = {handleClick}>Escalera</button>
    )
}

export default Escalera;