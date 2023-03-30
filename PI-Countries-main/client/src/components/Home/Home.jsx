import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";
import { filterByContinente, orderByName, orderByPoblacion, getActivityDetail, getCountries } from "../../redux/actions";
import style from "./Home.module.css";
import Activity from "../Activity/Activity"
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";


const Home = () => {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries)
    const activities = useSelector((state) => state.activities)

    const [order, setOrder] = useState("")
    //Paginado.Definir varios estados locales

    const [currentPage, setCurrentPage] = useState(1)  //estado con la pag actual
    const [countriesPerPage, setcountriesPerPage] = useState(10) //cuantos paises tengo por pagina

    const indexOfLastCountry = currentPage * countriesPerPage // 6  
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage // 0

    const currentCountries = allCountries.slice(indexOfFirstCountry, indexOfLastCountry)//paises que estan en la pagina actual, me traigo el array del estado global
    //slice agarra un arreglo y toma una porcion dependiendo de lo que yo le estoy pasando por parametro

    const paginado = (pageNumber) => { //ayuda al renderizado
        setCurrentPage(pageNumber)
    }

    const handleChangeFilterCont = (event) => {
        dispatch(filterByContinente(event.target.value))

    }

    const handleChangeOrderByName = (event) => {
        event.preventDefault();
        dispatch(orderByName(event.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${event.target.value}`) //cuando setee la pagina me modifique el estado local y me lo renderice
    }

    const handleChangeOrderByPoblacion = (event) => {
        event.preventDefault();
        dispatch(orderByPoblacion(event.target.value))
        setCurrentPage(1)
        setOrder(`Ordenado ${event.target.value}`)

    }

    const handleChangeFilterByActivity = (event) => {
        event.preventDefault();
        dispatch(getActivityDetail(event.target.value))
    }

    const handle = (event) =>{
        event.preventDefault();
        dispatch(getCountries())
    }

    return (

        <div className={style.Home}>

            

            <Nav 
            handle={handle}></Nav>

            <div className={style.filtro1}>

                <select onChange={event => handleChangeFilterCont(event)} className={style.filtro11}>

                    <option>Filtrado por Continente</option>
                    <option value="Todos">Todos</option>
                    <option value="South America">South America</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">North America</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Antarctic">Antarctic</option>
                    <option value="Europe">Europe</option>

                </select>

            </div>

            <div className={style.filtro2}>

                <select onChange={event => handleChangeFilterByActivity(event)} className={style.filtro22}>


                    <option>Filtrado por Actividad</option>
                    {/* <option value="Todas">Todas</option> */}
                    {activities.map((activity) => <option value={activity.name}>{activity.name}</option>)}
                </select>

            </div>

            <div className={style.orden1}>

                <select onChange={event => handleChangeOrderByName(event)} className={style.orden11}>

                    <option>Orden por nombre</option>

                    <option value="asc">A-Z</option>

                    <option value="desc">Z-A</option>

                </select>
            </div>

            <div className={style.orden2}>

                <select onChange={event => handleChangeOrderByPoblacion(event)} className={style.orden22}>

                    <option>Orden por Poblacion</option>

                    <option value="poblacion">Poblacion Creciente</option>

                    <option value="poblacion1">Poblacion Decreciente</option>

                </select>

            </div>

           

            <Paginado
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}
                paginado={paginado}
                currentPage={currentPage} >

            </Paginado>


            <Cards
                currentCountries={currentCountries}></Cards>

            

        </div>

    )
}

export default Home;