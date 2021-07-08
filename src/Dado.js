import './App.css';

const Dado = ({num, index, onClick}) => {

    const handleClick = () => {
        onClick(index)
    }

    return (
        <button type="button" className = "cuadrado-2 bg-white mx-2" onClick = {handleClick}>
            {num}
        </button>
    )
}

export default Dado