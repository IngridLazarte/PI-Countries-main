import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../../redux/actions";
import Card from "../Card/Card";
import style from "./Cards.module.css"


const Cards = ({currentCountries}) => {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries)

useEffect(()=>{ // pedir los paises para el estado global
dispatch(getCountries())
},[dispatch])


return (

    <div className={style.Cards}>

{/* {allCountries.map((country)=>{ */}

{currentCountries.map((country)=>{

         return <Card
         
         onClose={()=> window.alert("Cerrar imagen")}
         name={country.name}
         continente={country.continente}
         image={country.image}
         key={country.id}
         id={country.id}
         
         />
})   

}
    </div>)










    // return (
    //     <div>
            
    //      {allCountries.map((country)=>{

    //         return(
    //             <>
                
    //             <h2>{country.name}</h2>
    //             <h2>{country.continente}</h2>
    //             <img src={country.image} alt=""></img>
                
                
    //             </>
    //         )
    //      })}

         
             
    //     </div>
    // )
}

export default Cards;