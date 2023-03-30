import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ onClose, name, continente, image, id }) => {

    return (

        <div className={style.container}>

            {/* <button onClick={onClose} className={style.closeButton}>X</button> */}
            
            <img src={image} alt="" className={style.image}></img>
            <Link to={`/countries/${id}`}>
                <h2 className={style.name}>{name}</h2>
            </Link>
            <h2 className={style.continente}>{continente}</h2>
            




        </div>
    )

}

export default Card;