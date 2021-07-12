import Dado from './Dado';

const DadoEnMano = ({num, index, onClick}) => {

    const handleClick = () => {
        onClick(index)
    }

    return (
        <div className = {`cara-${num} puntero`} onClick = {handleClick}>
            <Dado num = {num}/>
        </div>
    )
}

export default DadoEnMano