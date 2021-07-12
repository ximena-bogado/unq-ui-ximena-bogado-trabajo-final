import './App.css';
import Dado from './Dado';

const DadoEnMano = ({num, index, onClick}) => {

    const handleClick = () => {
        onClick(index)
    }

    return (
        <div className = {`cara-${num}`} onClick = {handleClick}>
            <Dado num = {num}/>
        </div>
    )
}

export default DadoEnMano