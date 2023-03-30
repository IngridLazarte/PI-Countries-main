import { GET_COUNTRIES, GET_COUNTRIESBYNAME, GET_FILTERBYCONTINENTE, GET_ORDERBYNAME, GET_ORDERBYPOBLACION, POST_ACTIVITY, GET_ACTIVITIES, GET_ACTIVITIESDETAIL } from "./actions";

const initialState = {
    allCountries: [],
    countries: [],
    activities: [],
}

const reducer = (state = initialState, action) => {


    switch (action.type) {

        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: [...action.payload],
                countries: [...action.payload]
            }

        case GET_COUNTRIESBYNAME:
            console.log(action.payload);

            return {
                ...state,
                allCountries: [action.payload]
            }

        case GET_FILTERBYCONTINENTE:

            const todosCountries = state.countries;
            const countriesFilter = action.payload === "Todos" ? todosCountries : todosCountries.filter((country) => country.continente === action.payload)
            console.log(action.payload);
            console.log(countriesFilter);
            return {
                ...state,
                allCountries: [...countriesFilter]
            }

        case GET_ORDERBYNAME:
            let ordenado = []
            let ordenar = action.payload === "asc" ?
                (ordenado = state.allCountries.slice().sort((a, b) => { //compara dos valores
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                }), console.log(ordenado)) :
                (ordenado = state.allCountries.slice().sort((a, b) => {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                }), console.log(ordenado))

            return { ...state, allCountries: [...ordenado] }


        case GET_ORDERBYPOBLACION:

            let ordenado2 = []
            let ordenar2 = action.payload === "poblacion" ?
                (ordenado2 = state.allCountries.slice().sort((a, b) => { //compara dos valores
                    if (a.poblacion > b.poblacion) {
                        return 1;
                    }
                    if (b.poblacion > a.poblacion) {
                        return -1;
                    }
                    return 0;
                }), console.log(ordenado2)) :
                (ordenado2 = state.allCountries.slice().sort((a, b) => {
                    if (a.poblacion > b.poblacion) {
                        return -1;
                    }
                    if (b.poblacion > a.poblacion) {
                        return 1;
                    }
                    return 0;
                }), console.log(ordenado2))

            return { ...state, allCountries: [...ordenado2] }


        case POST_ACTIVITY:
            return {
                ...state
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: [...action.payload]
            }

        case GET_ACTIVITIESDETAIL:
            console.log(action.payload);
            const pepe = state.allCountries;

            const onlyActivity  = pepe.filter(country => country.activity.includes(action.payload));
           

            return {
                ...state,
                allCountries: onlyActivity
            };

        default:
            return {
                ...state
            };
    }
}

export default reducer;