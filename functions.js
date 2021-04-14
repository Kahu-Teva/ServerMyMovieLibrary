const Models = require("./modeles.js")

module.exports = {
    getRandomMovie : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Movies.count().exec( function(err, count){
            var randomNb = Math.floor(Math.random() * (count));

            Models.Movies.findOne().skip(randomNb).exec(function( err, result) {
                if (err)
                    res.send(err)
                res.send(result);
            })
        })
    },
    getMovies : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Movies.find({}, function (err, docs) {
            res.status(200).json(docs)
        });
    },
    getMovie : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Movies.findById(req.query.id, function (err, docs) {
            (err)?(res.status(200).send({error:'ERROR_MOVIE_NOT_FOUND'}))
            :(res.status(200).json(docs))
        });
    },
    getPeoples : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Peoples.find({}, function (err, docs) {
            res.status(200).json(docs);
        });
    },
    getPeople : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Peoples.findById(req.query.id, function (err, docs) {
            (err)?(res.status(200).send({error:'ERROR_PEOPLE_NOT_FOUND'}))
            :(res.status(200).json(docs))
        });
    }
    /*
    ,
     getActors : function(req,res){
        movies = Model("movies", movieSchema);
        
        movies.find({actors}, function (err, docs1) {
            actors = Model("peoples", peopleSchema);
            actors.find({}, function (err, docs2) {
                let actors = docs1;
                let people = docs2;
                let movieListe = [];
                let actorsListe = [];
                
                movie.map(currentMovie => (
                    peopleListe.push(currentPeople)
                ));

                actors.map(currentPeople => (
                    actorsListe.push(currentPeople)
                ));

                // movie
                console.log("movie: ", movieListe[1].actors);
                console.log("people: ", peopleListe[0]._id);
                res.json(peopleListe[0].firstname);
            });
        })
        
    } */
}