import axios from "axios";

export const GET_COUNTRIESBYNAME = "GET_COUNTRIESBYNAME";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIESBYID = "GET_COUNTRIESBYID";
export const GET_FILTERBYCONTINENTE = "GET_FILTERBYCONTINENTE";
export const GET_ORDERBYNAME = "GET_ORDERBYNAME";
export const GET_ORDERBYPOBLACION = "GET_ORDERBYPOBLACION";
export const POST_ACTIVITY = "POST_ACTIVITY";
export const GET_ACTIVITIES = "GET_ACTIVITIES";
export const GET_ACTIVITIESDETAIL = "GET_ACTIVITIESDETAIL"

export const getCountriesByName = (name) => {


    return async function (dispatch) {
        fetch(`http://localhost:3001/countries/?name=${name}`)
            .then((response) => response.json())
           
            .then((country) => {
               console.log(country[0]);
               if (country) {
                return dispatch({
                type: GET_COUNTRIESBYNAME,
                payload: country[0]
                })
                
               } else {
                  window.alert('No hay paises con ese nombre');
               }
            });
    }
    
}

export const getCountries = () => {

    return async function (dispatch) {
        try {
            const countries = await axios.get("http://localhost:3001/countries")
            return dispatch({
                type: GET_COUNTRIES,
                payload: countries.data
            })
        } catch (error) {
            console.log(error)
        }
       
    }
}


export const filterByContinente = (payload) => {
    console.log(payload);
return {
    type: GET_FILTERBYCONTINENTE,
    payload
}
}


export const orderByName = (payload) => {
console.log(payload);
    return{
        type: GET_ORDERBYNAME,
        payload
    }
}

export const orderByPoblacion = (payload) => {
console.log(payload);
    return{
        type: GET_ORDERBYPOBLACION,
        payload
    }
}

export const postActivity = (payload) => {

    return async function (dispatch) {
        try {
            const activities = axios.post("http://localhost:3001/activities",payload)
            console.log(payload);
            return activities;
        } catch (error) {
            console.log(error);

        }
    }
}


export const getActivities = () => {

    return async function (dispatch) {
        try {
            const activities = await axios.get("http://localhost:3001/activities")
            return dispatch({
                type: GET_ACTIVITIES,
                payload: activities.data
            })
        } catch (error) {
            console.log(error)
        }
       
    }
}

//una funcion que si coincide el value de la option con el activity name. Que me filtre con lo que haya en el
// value option y me muestre la actividad 

export const getActivityDetail = (payload) => {

    return{
        type: GET_ACTIVITIESDETAIL,
        payload
    }
}


