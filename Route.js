const express = require("express");
const functions = require("./functions.js");
const cors = require("cors");

router = express.Router();
router.use(cors());
router.use(express.urlencoded());

router.get("/", functions.getMovies);
router.get("/movies", functions.getMovies);
router.get("/movieDetails?:id", functions.getMovie);
router.get("/peoples", functions.getPeoples);
router.get("/randomMovie", functions.getRandomMovie);

router.get("/peopleDetails?:id", functions.getPeople);
router.get("/actorDetails?:id", functions.getPeople);
router.get("/writerDetails?:id", functions.getPeople);
router.get("/directorDetails?:id", functions.getPeople);

router.post("/insertMovie", functions.insertMovie);
router.post("/updateMovie", functions.updateMovie);
router.post("/deleteMovie", functions.deleteMovie);

router.post("/insertPeople", functions.insertPeople);
router.post("/updatePeople", functions.updatePeople);
router.post("/deletePeople", functions.deletePeople);

/*
router.get("/actors", functions.getActors);
router.get("/writers", functions.getWriters);
router.get("/directors", functions.getDirectors);
 */

// test
/* router.post("/insert", functions.insertUser);
router.post("/delete", functions.deleteUser);
router.post("/update", functions.updateUser); */

module.exports = router;