

const Numero = ({dados, setCategoria, setPuntaje, numero}) => {

    const handleClick = (event) => {
        event.preventDefault();
        //if (dados.includes(numero)) {
            setCategoria(numero)
            setPuntaje(calcularPuntaje())
            console.log("se hizo el handleSelectClick")
        //}
    }

    const calcularPuntaje = () => {
        const numerosAContar = dados.filter(dado => dado === numero)
        return (numerosAContar.length * numero)
    }

    return (
        <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleClick}> {numero} </button>
    )
}

export default Numero;