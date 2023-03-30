const axios = require("axios")
const { Country } = require("../db")

// traer de la API la info

const getApiData = async () => {

    
//try {
    const countries = await axios.get("https://restcountries.com/v3/all");

    const results = []
    
    await countries.data.map((country) => {

        const result = {
            id: country.cca3,
            name: country.name.common,
            image: country.flags[0],
            continente: country.region,
            capital: country.capital ? country.capital[0] : "Not Found",
            subregion: country.subregion ? country.subregion : "Not Found",
            area: country.area,
            poblacion: country.population
        }
       
        results.push(result);
    });
    
Country.bulkCreate(results, {ignoreDuplicates: true})
}
// guardarla en la base de datos

// const saveData = async () => {
//     try {
//         const countries = await getApiData();
//         //console.log(countries)
//         await Country.bulkCreate(countries);// bulkCreate me permite pasarle un array de objetos y los crea todos juntos en la BD 
//         console.log(countries)
//         return countries;

//     } catch (error) {
//         return error;
//     }

// }

module.exports = getApiData