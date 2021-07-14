import React from "react";
import Puntaje from "./Puntaje";
import PuntajeTotal from "./PuntajeTotal";

const TablaDePuntaje = ({jugadores}) => {

    return (
        <div className = "tabla">
        <table className ="table table-success table-bordered texto-cuadro" >
            <thead >
                <tr>
                    <th >Juegos</th>
                    {jugadores.map(jugador => <th key = {`jugadores-${jugador.nombre}`}>{jugador.nombre}</th>)}
                </tr>
            </thead>
            <tbody>
            <Puntaje name = {1} jugadores = {jugadores}/>
            <Puntaje name = {2} jugadores = {jugadores}/>
            <Puntaje name = {3} jugadores = {jugadores}/>
            <Puntaje name = {4} jugadores = {jugadores}/>
            <Puntaje name = {5} jugadores = {jugadores}/>
            <Puntaje name = {6} jugadores = {jugadores}/>
            <Puntaje name = {"Poker"} jugadores = {jugadores}/>
            <Puntaje name = {"Full"} jugadores = {jugadores}/>
            <Puntaje name = {"Escalera"} jugadores = {jugadores}/>
            <PuntajeTotal jugadores = {jugadores}/>
            </tbody>
        </table>
        </div>
    )
}

export default TablaDePuntaje;