const { Country } = require("../db")
const { Activity } = require("../db")
const { Op } = require("sequelize")

const getCountries = async () => {

    try {
        const countries = await Country.findAll({
            include: {
                model: Activity,
                attributes: ['name', 'id'],
                through: {
                    attributes: [],
                },
                as: 'activities'
            }
        });

        const activities = countries.map(country => {
            const activityNames = country.activities.map(activity => activity.name);
            return {
                id: country.id,
                name: country.name,
                image: country.image,
                continente: country.continente,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                poblacion: country.poblacion,
                activity: activityNames
            };
        });

        return activities;

    } catch (error) {
        console.log(error);
    }

}

const getCountryById = async (id) => {
    const countryId = await Country.findByPk(id)
    return countryId;
}

const getCountryByName = async (name) => {

    const countryName = await Country.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
    if (!countryName.length) {
        throw Error("No se encontraron paises con ese nombre");
    }
    return countryName;
}


module.exports = {
    getCountries,
    getCountryById,
    getCountryByName
}