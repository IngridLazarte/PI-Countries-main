import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions";
import { postActivity } from "../../redux/actions";
import Activity from "./Activity";
import style from "./Form.module.css"


const validate = (input) => {
    let errors = {};
    if (!input.name) {
        errors.name = 'Se requiere un nombre';
    } else if (!input.dificultad) {
        errors.dificultad = 'Se requiere seleccionar una dificultad'
    } else if (!input.duracion) {
        errors.duracion = 'Se requieren cantidad de dias'
    } else if (!input.temporada) {
        errors.temporada = 'Se requiere seleccionar una temporada'
    }
    return errors;
};


const Form = () => {

    const dispatch = useDispatch()
    const countries0 = useSelector((state) => state.countries)


    const listDific = ["", "1", "2", "3", "4", "5"]
    const listTemp = ["", "Verano", "Otoño", "Invierno", "Primavera"]

    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countries: [],
    })


    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;


        setInput({
            ...input,
            [property]: value,
        })
        console.log(input);

        setErrors(validate({
            ...input,
            [property]: value
        }))
    };

    const handleSelect = (event) => {
        setInput({
            ...input,
            countries: [...input.countries, event.target.value]
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postActivity(input))
        alert("Actividad Creada")
        setInput({
            name: "",
            dificultad: "",
            duracion: "",
            temporada: "",
            countries: [],
        })
    }

    const handleDelete = (country) => {
        setInput({
            ...input,
            countries: input.countries.filter(elem => elem !== country)
        })
    }

    return (

        <div className={style.fondo}>

            <Link to="/home"><button className={style.volver}>Volver</button></Link>




            <form onSubmit={(event) => handleSubmit(event)} className={style.form}>
                <div className={style.conjunto0}>
                    <h1 className={style.titulo}>Crear actividad</h1>
                    <label className={style.nombre}>Nombre de la actividad: </label> <input
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={(event) => handleChange(event)}
                        className={style.inputNombre}>
                    </input>
                    {errors.name && (<p className={style.error0}>{errors.name}</p>)}
                </div>
                <div className={style.conjunto1}>
                    <label className={style.dificultad}>Dificultad: </label>
                    <select
                        id="dificultad"
                        value={input.dificultad}
                        name="dificultad"
                        onChange={(event) => handleChange(event)}
                        className={style.inputDific}>

                        {listDific.map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                    {errors.dificultad && (<p className={style.error1}>{errors.dificultad}</p>)}
                </div>
                <div className={style.conjunto2}>
                    <label className={style.duracion}>Duracion: </label>
                    <input
                        type="number"
                        value={input.duracion}
                        name="duracion"
                        onChange={(event) => handleChange(event)}
                        className={style.inputDurac}>
                    </input>
                    <label className={style.dias}>Dias</label>
                    {errors.duracion && (<p className={style.error2}>{errors.duracion}</p>)}
                </div>
                <div className={style.conjunto3}>
                    <label className={style.temporada}>Temporada: </label>
                    <select
                        id="temporada"
                        value={input.temporada}
                        name="temporada"
                        onChange={(event) => handleChange(event)}
                        className={style.inputTemp}>
                        {listTemp.map((op) => (
                            <option key={op} value={op}>
                                {op}
                            </option>
                        ))}
                    </select>
                    {errors.temporada && (<p className={style.error3}>{errors.temporada}</p>)}
                </div>
                <div className={style.conjunto4}>
                    <label className={style.paises}>Paises participantes: </label>
                    <select onChange={(event) => handleSelect(event)} className={style.inputPaises}>
                        {countries0.map((country) => (
                            <option value={country.id} key={country.id}>{country.name}</option>
                        ))}
                    </select>
                    {/* <ul><li>{input.countries.map(country => country + ",")}</li></ul> */}
                    {input.countries.map(country =>

                        <div className={style.eleccion}>
                            <p>{country}</p>
                            <button onClick={() => handleDelete(country)} className={style.buttonElec}>x</button>

                        </div>)}
                </div>

                <button type="submit" className={style.buttonCrear}>Crear Actividad</button>
            </form>




            <div className={style.activities}>
                <Activity>

                </Activity>
            </div>

        </div>
    )



}

export default Form;