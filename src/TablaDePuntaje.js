import React from "react";
import Puntaje from "./Puntaje";
import './App.css';

const TablaDePuntaje = () => {

    return (
        <table className ="table table-success table-bordered tabla" >
            <thead >
                <tr className ="" >
                    <th scope="col">Juegos</th>
                    <th scope="col">Jugador</th>
                </tr>
            </thead>
            <tbody>
            <Puntaje name = {1}/>
            <Puntaje name = {2}/>
            <Puntaje name = {3}/>
            <Puntaje name = {4}/>
            <Puntaje name = {5}/>
            <Puntaje name = {6}/>
            <Puntaje name = {"Poker"}/>
            <Puntaje name = {"Full"}/>
            <Puntaje name = {"Escalera"}/>
            </tbody>
        </table>
    )
}

export default TablaDePuntaje;