const { Router } = require("express")
const router = Router()
const { Country, Activity } = require("../db")
const {
    getCountries,
    getCountryById,
    getCountryByName
} = require("../controllers/CountryControllers")

router.get("/", async (req, res) => {
    const { name } = req.query;
   
    try {
        if (name) {
            const countryName = await getCountryByName(name)
            return res.status(200).json(countryName)
        } else {
            const countries = await getCountries();
            res.status(200).json(countries)
        }
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
})



router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const countryId = await getCountryById(id)
        res.status(200).json(countryId)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})






module.exports = router;