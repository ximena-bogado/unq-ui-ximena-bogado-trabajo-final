import generalaIcon from './resources/generala-icon.png'

const Barra = ({nombre}) => {

    return (
        <>
            <img src = {generalaIcon} className="icon mt-2" alt = "generala"/>
            <h4 className = "barra-izquierda texto" >Puntajes</h4>
            <span className = "centro texto-centro"> <strong> Jugador actual:</strong> {nombre}</span>
            <h4 className = "barra-derecha texto">Categorías</h4>
        </>
    )
}

export default Barra