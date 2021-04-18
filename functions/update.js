const Models = require("./../modeles.js");

module.exports = {
    updatePeople : (req,res) =>{
        res.setHeader('Content-type','application/json');
        console.log("request: "); 
        if(    req.body.lastname         != "" 
            && req.body.firstname   != ""
            && req.body.biography      != ""
            && req.body.birthDate    != ""
            && req.body.deathDate   != ""
            && req.body.picture          != ""            
        ){            
            Models.Peoples.updateMany(
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
    updateMovie : (req,res) => {
        res.setHeader('Content-type','application/json');
        
        if(    req.body.title         != "" 
            && req.body.releaseDate   != ""
            && req.body.duration      != ""
            && req.body.posterLink    != ""
            && req.body.trailerLink   != ""
            && req.body.rate          != ""            
        ){
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
    updateUser : (req,res) => {
        res.setHeader('Content-type','application/json');
        Models.Users.updateMany(
            {_id : req.body.id},
            {name : req.body.name , mdp : req.body.mdp},
            function(err,result){
                res.send(result);
            }
        );
    }
}