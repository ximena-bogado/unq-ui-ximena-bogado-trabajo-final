

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
        <button type = "button" className = "boton border-white btn btn-outline-secondary mb-2 " onClick = {handleClick}> <label className = "texto-botones ">{numero} </label></button>
    )
}

export default Numero;