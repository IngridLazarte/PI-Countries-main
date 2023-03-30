const { Router } = require("express")
const router = Router()
const { Country, Activity } = require("../db")
const { getActivities } = require("../controllers/ActivityController")


// router.post("/", async (req, res) => {
// const { name, dificultad,  duracion, temporada, countries } = req.body;
//     try {
//         const newActivity = await createActivity(name, dificultad,  duracion, temporada, countries)
//         res.status(200).json(newActivity)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// })

router.post("/", async (req, res) => {
    const { name, dificultad,  duracion, temporada, countries } = req.body;
    
try {
    
    const newActivity = await Activity.create({name, dificultad,  duracion, temporada})

    const buscoCountry = await Country.findAll({
        where: {id: countries}
    })

    newActivity.addCountry(buscoCountry)

    res.send("se hizo")
} catch (error) {
    res.status(400).json({error: error.message})
}

})

router.get("/", async (req, res) => {

    try {
        const activities = await Activity.findAll({
            include: [
              {
                model: Country,
                attributes: ["id","image","name"],
                through: { attributes: [] },
              },
            ],
          });
        console.log(activities)
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({error: error.message})
}
    })



module.exports= router;