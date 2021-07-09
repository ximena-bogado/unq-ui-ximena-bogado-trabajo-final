
const Full = ({dados, setCategoria, setPuntaje}) => {

    const esFull = () => {
        return(tieneLaCantidadDeDadosIguales(3) && tieneLaCantidadDeDadosIguales(2))
    }

    const tieneLaCantidadDeDadosIguales = (cantidad) => {
        const numeros = [1,2,3,4,5,6]
        let resultado = false
        numeros.forEach(element => {
            const result = dados.filter( dado => dado === element )
            resultado = resultado || result.length === cantidad
        });
        console.log(resultado)
        return(resultado)
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (esFull()) {
            setCategoria("full")
            setPuntaje(30)
            console.log("se hizo el full")
        }
    }

    return (
        <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleClick}>Full</button> 
    )
}

export default Full