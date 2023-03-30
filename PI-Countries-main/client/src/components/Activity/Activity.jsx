import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../../redux/actions";
import style from "./Activity.module.css";



const Activity = () => {


    const dispatch = useDispatch();
    const activities = useSelector((state) => state.activities)

    useEffect(() => {
        dispatch(getActivities())
    }, [dispatch])


    return (

        <div className={style.container}>
           
            {activities && activities.map((activity) => {

                return (
                    <div className={style.card} >
                        <h3>Actividad: {activity.name}</h3>
                        <h3>Dificultad: {activity.dificultad}</h3>
                        <h3>Duracion: {activity.duracion}</h3>
                        <h3>Temporada: {activity.temporada}</h3>
                        <div>Paises participantes:
                            {activity.countries.map((country) =>
                                <ul>{country.name}{<img src={country.image} alt="" className={style.image}></img>}</ul>)}


                        </div>
                    </div>
                )
            }
            )}
            
        </div>
    )







}

export default Activity;

// ({activities && activities.map((activity) => {

//     return (
//         <div>

//             <h3>{activity.name}</h3>
//             <h3>{activity.dificultad}</h3>
//             <h3>{activity.duracion}</h3>
//             <h3>{activity.temporada}</h3>
//             <div>
//                 {activity.countries.map((country) =>
//                     <ul>{country.name}</ul>)}


//             </div>



//             )}