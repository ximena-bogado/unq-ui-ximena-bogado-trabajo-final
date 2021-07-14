

const Numero = ({dados, setCategoria, setPuntaje, numero}) => {

    const handleClick = (event) => {
        event.preventDefault();
        setCategoria(numero)
        setPuntaje(calcularPuntaje())
    }

    const calcularPuntaje = () => {
        const numerosAContar = dados.filter(dado => dado.numero === numero)
        return (numerosAContar.length * numero)
    }

    return (
        <button type = "button" className = "border-white texto-botones btn btn-outline-secondary mb-2 " onClick = {handleClick}> {numero} </button>
    )
}

export default Numero;