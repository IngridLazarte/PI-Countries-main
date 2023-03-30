import React from "react";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import { Link } from "react-router-dom";

const Detail = () => {

    const [country, setCountry] = useState({});
    const { id } = useParams();


    //montaje y cuando cambie el id
    useEffect(() => {
        fetch(`http://localhost:3001/countries/${id}`)
            .then((response) => response.json())
            .then((country) => {
                if (country.name) {
                    setCountry(country);
                } else {
                    window.alert("No hay paises con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay paises con ese ID");
            });
        return setCountry({});
    }, [id]);

    return (

        <div className={style.caja}>

            <div className={style.Detail}>

                <Link to="/home">
                    <button className={style.closeButton}>X</button>
                </Link>
                <h3 className={style.id}>id: {country.id}</h3>
                <h2 className={style.name}>Nombre: {country.name}</h2>
                <img src={country.image} alt={country.image} className={style.image}></img>
                <h4 className={style.continente}>Continente: {country.continente}</h4>
                <h4 className={style.capital}>Capital: {country.capital}</h4>
                <h4 className={style.subregion}>Subregion: {country.subregion}</h4>
                <h4 className={style.area}>Area: {country.area}</h4>
                <h4 className={style.poblacion}>Poblacion: {country.poblacion}</h4>

            </div>

        </div>

    )
}

export default Detail;




