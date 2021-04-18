const express = require("express");
const cors = require("cors");

router = express.Router();
router.use(cors());
router.use(express.urlencoded());

const CreateFunc = require("./functions/create.js");
const Read = require("./functions/read.js");
const Update = require("./functions/update.js");
const Delete = require("./functions/delete.js");


router.get("/", Read.getMovies);
router.get("/movies", Read.getMovies);
router.get("/movieDetails?:id", Read.getMovie);
router.get("/peoples", Read.getPeoples);
router.get("/randomMovie", Read.getRandomMovie);

router.get("/peopleDetails?:id", Read.getPeople);
router.get("/actorDetails?:id", Read.getPeople);
router.get("/writerDetails?:id", Read.getPeople);
router.get("/directorDetails?:id", Read.getPeople);

router.post("/insertMovie", CreateFunc.insertMovie);
router.post("/updateMovie", Update.updateMovie);
router.post("/deleteMovie", Delete.deleteMovie);

router.post("/insertPeople", CreateFunc.insertPeople);
router.post("/updatePeople", Update.updatePeople);
router.post("/deletePeople", Delete.deletePeople);

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