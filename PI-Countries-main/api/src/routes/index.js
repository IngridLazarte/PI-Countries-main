const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require("./countryRouter")
const activityRouter = require("./activityRouter")
//const server = require("../app")
//const express = require("express")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


 router.use('/countries',countryRouter);
 router.use('/activities', activityRouter);
 //server.use(express.json());

module.exports = router;
