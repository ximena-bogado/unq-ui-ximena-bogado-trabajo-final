
const Poker = ({dados, setCategoria, setPuntaje}) => {

    const esPoker = () => {
        const numeros = [1,2,3,4,5,6]
        let esPoker = false
        numeros.forEach(element => {
            const result = dados.filter( dado => dado.numero === element )
            esPoker = esPoker || result.length >= 4
        });
        return (esPoker) 
    }

    const handleClick = (event) => {
        event.preventDefault();
        setCategoria("poker")
        if (esPoker()) {
            setPuntaje(40)
        } else {
            setPuntaje(0)
        }
    }

    return (
        <button type = "button" className = "text-white border-white btn btn-outline-secondary mb-2" onClick = {handleClick}>Poker</button>
    )
}

export default Poker;