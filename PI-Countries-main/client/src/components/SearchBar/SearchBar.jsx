import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../../redux/actions";
import style from "./SearchBar.module.css"


export default function SearchBar1() {

   const dispatch = useDispatch()
   const [name, setName] = useState("")

   //voy a necesitar una funcion que maneje cuando haya una modificacion en el input

   const handleChange = (event) => { //que guarde en el estado dentro del evento lo que venga en su valor

      setName(event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(getCountriesByName(name))
   }


   return (
      <div>
         <label className={style.texto}>Buscar pais: </label><input type='search' value={name} onChange={handleChange} className={style.input}/> {/* //va a mostrar lo que se escriba y lo que se guarde en el estado. Onchange cuando haya un cambio se ejecute la handlePersonaje */}
         {/* <button onClick={props.onSearch}>Agregar</button> */}
         <button onClick={(event) => { handleSubmit(event) }} className={style.button}>Buscar</button>
      </div>
   );
}

