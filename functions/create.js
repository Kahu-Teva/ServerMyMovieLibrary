const Models = require("./../modeles.js");

module.exports = {
    insertPeople : function(req,res){
        res.setHeader('Content-type','application/json');        
        if(    req.body.lastname         != "" 
            && req.body.firstname   != ""
            && req.body.biography      != ""
            && req.body.picture          != ""            
        ){ 
            Models.Peoples.insertMany(
                {
                    lastname : req.body.lastname ,
                    firstname : req.body.firstname,
                    biography : req.body.biography,
                    birthDate : req.body.birthDate,
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
    insertMovie : function(req,res){
        res.setHeader('Content-type','application/json');
        
        if(    req.body.title         != "" 
            && req.body.releaseDate   != ""
            && req.body.duration      != ""
            && req.body.posterLink    != ""
            && req.body.trailerLink   != ""
            && req.body.rate          != ""            
        ){
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
    insertUser : function(req,res){
        res.setHeader('Content-type','application/json');
        if(req.body.name != "" && req.body.mdp != ""){
            Models.Users.insertMany(
                {name : req.body.name, mdp : req.body.mdp}
            );
        }
    }
}