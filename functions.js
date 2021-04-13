const db = require("./db.json");

module.exports = {
    getActors : function(req,res){
        let actorsListDB = [];
        let actorsList = [];

        db.movies.map(movie => (
            movie.actors.map(actor=>(
                db.peoples.map(people => (
                (actor._id === people._id )? 
                actorsListDB.push(people) : null
              ))  
            ))
        ));
        actorsList = Array.from(new Set(actorsListDB));
        res.status(200).json(actorsList);
    },
    getWriters : function(req,res){
        let writersListDB = [];
        let writersList = [];

        db.movies.map(movie => (
            movie.writers.map(writerID=>(
                db.peoples.map(people => (
                (writerID === people._id )? 
                writersListDB.push(people) : null
              ))  
            ))
        ));
        writersList = Array.from(new Set(writersListDB));
        res.status(200).json(writersList);
    },
    getDirectors : function(req,res){
        let directorsListDB = [];
        let directorsList = [];

        db.movies.map(movie => (
            movie.directors.map(directorID=>(
                db.peoples.map(people => (
                (directorID === people._id )? 
                directorsListDB.push(people) : null
              ))  
            ))
        ));
        directorsList = Array.from(new Set(directorsListDB));
        res.status(200).json(directorsList)
    },
    getPeople : function(req,res){
        const id = req.query.id
        const dbLc = db.peoples.filter(people => people._id === id)
        res.status(200).json(dbLc)
    },
    getPeoples : function(req,res){
        res.status(200).json(db.peoples)
    },
    getMovie : function(req,res){
        const id = req.query.id
        const dbLc = db.movies.filter(movie => movie._id === id)
        res.status(200).json(dbLc)
    },
    getMovies : function(req,res){
        res.status(200).json(db.movies)
    }
}