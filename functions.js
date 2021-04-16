const mongoose = require("mongoose");
const Models = require("./modeles.js");
const passport =  require("passport");

module.exports = {
    getRandomMovie : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Movies.countDocuments().exec( function(err, count){
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
        console.log("requests");
        Models.Peoples.findById(req.query.id, function (err, docs) {
            (err)?(res.status(200).send({error:'ERROR_PEOPLE_NOT_FOUND'}))
            :(res.status(200).json(docs))
        });
    },
    
    
    
    
    
    /* ##################################################################"" */
    insertPeople : function(req,res){
        res.setHeader('Content-type','application/json');        
        if(    req.body.lastname         != "" 
            && req.body.firstname   != ""
            && req.body.biography      != ""
            && req.body.picture          != ""            
        ){
            
            console.log("lsasaastname:", req.body.lastname);
            console.log("firstname:", req.body.firstname);
            console.log("biography:", req.body.biography);
            console.log("birthDate:", req.body.birthDate);
            console.log("deathDate:", req.body.deathDate);
            console.log("picture:", req.body.picture);
            
            Models.Peoples.insertMany(
                {
                    lastname : req.body.lastname ,
                    firstname : req.body.firstname,
                    biography : req.body.biography,
                    birthDate : "20000101",
                    deathDate : " ",
                    picture : req.body.picture
                },
                function(err,result){
                    (err)?
                    (
                        res.status(200).send({error:'DATABASE_ERROR_UPDATE_PEOPLE'}))
                    :(
                        res.status(200).send({validation:'DATABASE_ACCEPT_REQUEST'}))
                }
            );
        }
    },  
    updatePeople : function(req,res){
        res.setHeader('Content-type','application/json');
        console.log("lsasaastname:", req.body.lastname);
            console.log("firstname:", req.body.firstname);
            console.log("biography:", req.body.biography);
            console.log("birthDate:", req.body.birthDate);
            console.log("deathDate:", req.body.deathDate);
            console.log("picture:", req.body.picture);
        
        if(    req.body.lastname         != "" 
            && req.body.firstname   != ""
            && req.body.biography      != ""
            && req.body.birthDate    != ""
            && req.body.deathDate   != ""
            && req.body.picture          != ""            
        ){
            
            console.log("lsasaastname:", req.body.lastname);
            console.log("firstname:", req.body.firstname);
            console.log("biography:", req.body.biography);
            console.log("birthDate:", req.body.birthDate);
            console.log("deathDate:", req.body.deathDate);
            console.log("picture:", req.body.picture);
            
            Models.Movies.updateMany(
                {_id : req.body.id},
                {
                    lastname : req.body.lastname ,
                    firstname : req.body.firstname,
                    biography : req.body.biography,
                    birthDate : req.body.birthDate,
                    deathDate : req.body.deathDate,
                    picture : req.body.picture
                },
                function(err,result){
                    (err)?
                    (res.status(200).send({error:'DATABASE_ERROR_UPDATE_PEOPLE'}))
                    :(res.status(200).send({validation:'DATABASE_ACCEPT_REQUEST'}))
                }
            );
        }
    },
    deletePeople : function(req,res){
        res.setHeader('Content-type','application/json');

        Models.Peoples.deleteMany({_id : req.body.id},
            function(err,result){
                (err)?
                (res.status(200).send({error:'DATABASE_ERROR_DELETE_PEOPLE'}))
                :(res.status(200).send({validation:'DATABASE_ACCEPT_REQUEST'}))
            }
        );
    },
    insertMovie : function(req,res){
        res.setHeader('Content-type','application/json');
        
        if(    req.body.title         != "" 
            && req.body.releaseDate   != ""
            && req.body.duration      != ""
            && req.body.posterLink    != ""
            && req.body.trailerLink   != ""
            && req.body.rate          != ""            
        ){
            
            /* console.log("title:", req.body.title);
            console.log("releaseDatele:", req.body.releaseDate);
            console.log("duration:", req.body.duration);
            console.log("posterLink:", req.body.posterLink);
            console.log("trailerLink:", req.body.trailerLink);
            console.log("id:", req.body.id);
            console.log("genre:", req.body.genre);
            console.log("actors:", req.body.actors);
            console.log("writers:", req.body.writers);
            console.log("directors:", req.body.directors); */
            
            Models.Movies.insertMany(
                {
                    title : req.body.title ,
                    synopsis : req.body.synopsis,
                    genre : req.body.genre,
                    duration : req.body.duration,
                    posterLink : req.body.posterLink,
                    trailerLink : req.body.trailerLink,
                    releaseDate : req.body.releaseDate,
                    directors : req.body.directors,
                    writers : req.body.writers,
                    rate : req.body.rate
                },
                function(err,result){
                    (err)?
                    (res.status(200).send({error:'DATABASE_ERROR_INSERT_MOVIE'}))
                    :(res.status(200).send({validation:'DATABASE_ACCEPT_REQUEST'}))
                }
            );
        }
    },
    updateMovie : function(req,res){
        res.setHeader('Content-type','application/json');
        
        if(    req.body.title         != "" 
            && req.body.releaseDate   != ""
            && req.body.duration      != ""
            && req.body.posterLink    != ""
            && req.body.trailerLink   != ""
            && req.body.rate          != ""            
        ){
            
            /* console.log("title:", req.body.title);
            console.log("releaseDatele:", req.body.releaseDate);
            console.log("duration:", req.body.duration);
            console.log("posterLink:", req.body.posterLink);
            console.log("trailerLink:", req.body.trailerLink);
            console.log("id:", req.body.id);
            console.log("genre:", req.body.genre);
            console.log("actors:", req.body.actors);
            console.log("writers:", req.body.writers);
            console.log("directors:", req.body.directors); */
            
            Models.Movies.updateMany(
                {_id : req.body.id},
                {
                    title : req.body.title ,
                    synopsis : req.body.synopsis,
                    genre : req.body.genre,
                    duration : req.body.duration,
                    posterLink : req.body.posterLink,
                    trailerLink : req.body.trailerLink,
                    releaseDate : req.body.releaseDate,
                    directors : req.body.directors,
                    writers : req.body.writers,
                    rate : req.body.rate
                },
                function(err,result){
                    (err)?
                    (res.status(200).send({error:'DATABASE_ERROR_UPDATE_MOVIE'}))
                    :(res.status(200).send({validation:'DATABASE_ACCEPT_REQUEST'}))
                }
            );
        }
    },
    deleteMovie : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Movies.deleteMany({_id : req.body.id},
            function(err,result){
                (err)?
                (res.status(200).send({error:'DATABASE_ERROR_DELETE_MOVIE'}))
                :(res.status(200).send({validation:'DATABASE_ACCEPT_REQUEST'}))
            }
        );       
    }
    
    
    /* ,  
    insertUser : function(req,res){
        res.setHeader('Content-type','application/json');
        if(req.body.name != "" && req.body.mdp != ""){
            Models.Users.insertMany(
                {name : req.body.name, mdp : req.body.mdp}
            );
        }
    },    
    deleteUser : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Users.deleteMany({_id : req.body.id},
            function(err,result){
                res.send(result);
            }
        );
    },
    updateUser : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Users.updateMany(
            {_id : req.body.id},
            {name : req.body.name , mdp : req.body.mdp},
            function(err,result){
                res.send(result);
            }
        );
    } */
}