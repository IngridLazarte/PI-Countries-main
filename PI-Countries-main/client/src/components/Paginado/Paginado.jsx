import React from "react";
import style from "./Paginado.module.css";

const Paginado = ({ countriesPerPage, allCountries, paginado, currentPage }) => {

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumber.push(i)

    }

    const handleChangeAnterior = (event) => {
        event.preventDefault();
        paginado(currentPage - 1)
    }
    const handleChangeSiguente = (event) => {
        event.preventDefault();
        paginado(currentPage + 1)
    }

    

    return (

        <nav className={style.Paginado}>

            {currentPage !== 1 && <button onClick={handleChangeAnterior} className={style.anterior}>Anterior</button>}

            <ul>
                {pageNumber && pageNumber.map((num) => {
                    const isActive = num === currentPage;
                    return (

                        <a className={`${style.Numbers} ${isActive ? style.active : ""}`} key={num} onClick={() => paginado(num)}>{num}</a>

                    )
                })}
            </ul>

            {currentPage !== 25 && <button onClick={handleChangeSiguente} className={style.siguiente}>Siguiente</button>}
        </nav>
    )
}

export default Paginado;