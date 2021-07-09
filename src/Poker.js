
const Poker = ({dados, setCategoria, setPuntaje}) => {

    const esPoker = () => {
        const numeros = [1,2,3,4,5,6]
        let esPoker = false
        numeros.forEach(element => {
            const result = dados.filter( dado => dado === element )
            esPoker = esPoker || result.length >= 4
        });
        console.log(esPoker)
        return (esPoker) 
    }

    const handleClick = (event) => {
        event.preventDefault();
        if (esPoker()) {
            setCategoria("poker")
            setPuntaje(40)
        } else {
            setCategoria("poker")
            setPuntaje(0)
        }
    }

    return (
        <button type = "button" className = "btn btn-secondary mb-2" onClick = {handleClick}>Poker</button>
    )
}

export default Poker;