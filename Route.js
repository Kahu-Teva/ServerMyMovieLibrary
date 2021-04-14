const express = require("express");
const functions = require("./mongoDbFunctions.js");
// const functions = require("./functions.js");
const cors = require("cors");

router = express.Router();
router.use(cors());
router.get("/", functions.getMovies);
router.get("/movies", functions.getMovies);
router.get("/movieDetails?:id", functions.getMovie);
router.get("/peoples", functions.getPeoples);
router.get("/actorDetails?:id", functions.getPeople);
router.get("/writerDetails?:id", functions.getPeople);
router.get("/directorDetails?:id", functions.getPeople);

/*
router.get("/actors", functions.getActors);
router.get("/writers", functions.getWriters);
router.get("/directors", functions.getDirectors);
 */

module.exports = router;