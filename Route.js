const express = require("express");
const functions = require("./functions.js");
router = express.Router();

router.get("/movies", functions.getMovies);
router.get("/movieDetails/:id", functions.getMovie);

router.get("/actors", functions.getActors);
router.get("/writers", functions.getWriters);
router.get("/directors", functions.getDirectors);

router.get("/actorDetails/:id", functions.getPeople);
router.get("/writerDetails/:id", functions.getPeople);
router.get("/directorDetails/:id", functions.getPeople);

module.exports = router;