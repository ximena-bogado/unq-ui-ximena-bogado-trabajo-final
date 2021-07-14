
const Full = ({dados, setCategoria, setPuntaje}) => {

    const esFull = () => {
        return(tieneLaCantidadDeDadosIguales(3) && tieneLaCantidadDeDadosIguales(2))
    }

    const tieneLaCantidadDeDadosIguales = (cantidad) => {
        const numeros = [1,2,3,4,5,6]
        let resultado = false
        numeros.forEach(element => {
            const result = dados.filter( dado => dado.numero === element )
            resultado = resultado || result.length === cantidad
        });
        return(resultado)
    }

    const handleClick = (event) => {
        event.preventDefault();
        setCategoria("Full")
        if (esFull()) {
            setPuntaje(30)
        } else {
            setPuntaje(0)
        }
    }

    return (
        <button type = "button" className = "texto-botones border-white btn btn-outline-secondary mb-2 " onClick = {handleClick}>Full</button> 
    )
}

export default Full