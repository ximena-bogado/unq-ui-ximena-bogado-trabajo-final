
const Escalera = ({dados, setCategoria, setPuntaje}) => {

    const esEscalera = () => {
        const escalera = [2,3,4,5]
        let esEscalera = true
        escalera.forEach(numero =>
            esEscalera = esEscalera && dados.some(dado => dado.numero === numero)    
        )
        const contieneUnoOSeis = dados.some(dado => dado.numero === 1) || dados.some(dado => dado.numero === 6)
        return (esEscalera && contieneUnoOSeis)
    }

    const handleClick = (event) => {
        event.preventDefault();
        setCategoria("Escalera")
        if (esEscalera()) {
            setPuntaje(20)
        } else {
            setPuntaje(0)
        }
    }

    return (
        <button type = "button" className = "text-white border-white btn btn-outline-secondary mb-2 "onClick = {handleClick}>Escalera</button>
    )
}

export default Escalera;