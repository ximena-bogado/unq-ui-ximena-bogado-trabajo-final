import Dado from './Dado';

const DadoApartado = ({num}) => {

    return (
        <div className = {`cara-${num}`}>
            <Dado num = {num}/>
        </div>
    )
}

export default DadoApartado