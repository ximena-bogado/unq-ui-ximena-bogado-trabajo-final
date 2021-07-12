
const Dado = ({num}) => {
    
    switch (num) {
        case 1:
            return( <>
                        <div className="punto"></div>
                    </>)
        case 2:
            return (<>
                        <div className ="punto"></div>
                        <div className ="punto"></div>
                    </>)
        case 3:
            return (<>
                        <div className="punto"></div>
                        <div className="punto"></div>
                        <div className="punto"></div>
                    </>)
        case 4:
            return (<>
                        <div className="columna">
                            <div className="punto"></div>
                            <div className="punto"></div>
                        </div>
                        <div className="columna">
                            <div className="punto"></div>
                            <div className="punto"></div>
                        </div>
                    </>)
        case 5:
            return (<>
                        <div className="columna">
                            <div className="punto"></div>
                            <div className="punto"></div>
                        </div>
                        <div className="punto medio"></div>
                        <div className="columna">
                            <div className="punto"></div>
                            <div className="punto"></div>
                        </div>
                    </>)
        case 6:
            return (<>
                        <div className="columna">
                            <div className="punto"></div>
                            <div className="punto"></div>
                            <div className="punto"></div>
                        </div>
                        <div className="columna">
                            <div className="punto"></div>
                            <div className="punto"></div>
                            <div className="punto"></div>
                        </div>
                    </>)
        default: return (0)
    }
}

export default Dado