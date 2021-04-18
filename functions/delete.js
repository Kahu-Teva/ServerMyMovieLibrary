const Models = require("./../modeles.js");

module.exports = {
    deletePeople : (req,res) => {
        res.setHeader('Content-type','application/json');

        Models.Peoples.deleteMany({_id : req.body.id},
            function(err,result){
                (err)?
                (res.status(200).send({error:'DATABASE_ERROR_DELETE_PEOPLE'}))
                :(res.status(200).send({validation:'DATABASE_ACCEPT_REQUEST'}))
            }
        );
    },
    deleteMovie : (req,res) => {
        res.setHeader('Content-type','application/json');
        Models.Movies.deleteMany({_id : req.body.id},
            function(err,result){
                (err)?
                (res.status(200).send({error:'DATABASE_ERROR_DELETE_MOVIE'}))
                :(res.status(200).send({validation:'DATABASE_ACCEPT_REQUEST'}))
            }
        );       
    }, 
    deleteUser : (req,res) => {
        res.setHeader('Content-type','application/json');
        Models.Users.deleteMany({_id : req.body.id},
            function(err,result){
                res.send(result);
            }
        );
    }
}