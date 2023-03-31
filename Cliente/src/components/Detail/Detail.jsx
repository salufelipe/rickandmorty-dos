import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Detail(){

        const {detailId} = useParams();

        const [character, setCharacter] = useState({});


        useEffect(() => {
            const key = 'fc680417fad2.0f0b17f9fbd87e12ab40';
            const url_base = "https://be-a-rym.up.railway.app/api/character/";
            // const url_base = http://localhost:3001/rickandmorty/character/${id}
            fetch(`${url_base}${detailId}?key=${key}`)
              .then((response) => response.json())
              .then((char) => {
                if (char.name) {
                  setCharacter(char);
                } else {
                  window.alert("No hay personajes con ese ID");
                }
              })
              .catch((err) => {
                window.alert("No hay personajes con ese ID");
              });
            return setCharacter({});
          }, [detailId]);

        const mensaje = `Este es el detail de ${detailId}`
        
        return(
        <div>

            <h1>{mensaje} </h1>
            <h2>Nombre : {character?.name}</h2>
            <h2>Especie : {character?.species}</h2>
            <h2>Género : {character?.gender}</h2>
            <h2>Status : {character?.status}</h2>
            <h2>Origen : {character.origin?.name}</h2>
            <img src={character?.image} alt=""/>
            <Link to="/home"><h4>Volver</h4></Link>

        </div>
    )



}