import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";
import style from "./Nav.module.css";


const Nav = ({handle}) => {

    
return (

    <div className={style.Nav}>

<button onClick={handle} className={style.inicio}>Inicio</button>

        <div className={style.input}>
            <SearchBar></SearchBar>
        </div>
        <div className={style.Activity}>
            <Link to="/activities">
                <button className={style.button}>Crear Actividad</button>
            </Link>
        </div>




    </div>
)
}

export default Nav;