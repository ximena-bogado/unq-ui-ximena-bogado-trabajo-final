import React from "react";
import Puntaje from "./Puntaje";
import PuntajeTotal from "./PuntajeTotal";
import './App.css';

const TablaDePuntaje = ({puntajes}) => {

    return (
        <table className ="table table-success table-bordered tabla" >
            <thead >
                <tr className ="" >
                    <th scope="col">Juegos</th>
                    <th scope="col">Jugador</th>
                </tr>
            </thead>
            <tbody>
            <Puntaje name = {1} puntaje = {puntajes[1]}/>
            <Puntaje name = {2} puntaje = {puntajes[2]}/>
            <Puntaje name = {3} puntaje = {puntajes[3]}/>
            <Puntaje name = {4} puntaje = {puntajes[4]}/>
            <Puntaje name = {5} puntaje = {puntajes[5]}/>
            <Puntaje name = {6} puntaje = {puntajes[6]}/>
            <Puntaje name = {"Poker"} puntaje = {puntajes["poker"]}/>
            <Puntaje name = {"Full"} puntaje = {puntajes["full"]}/>
            <Puntaje name = {"Escalera"} puntaje = {puntajes["escalera"]}/>
            <PuntajeTotal puntajes = {puntajes}/>
            </tbody>
        </table>
    )
}

export default TablaDePuntaje;