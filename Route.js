const express = require("express");
const MongoClient = require('mongodb').MongoClient;

const functions = require("./functions.js");

const connectionString = "mongodb://127.0.0.1:27017";

MongoClient.connect(connectionString, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database');
    const db = client.db('mylibrarymovie');

    /*
    db.collection("movies").findOne({}, function(err, result) {
        if (err) throw err;
        console.log("Movies : " + result.title);
        client.close();
    });
    */

    db.collection("movies").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log("Movies : " + result[3].title);
        client.close();
    });
});

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