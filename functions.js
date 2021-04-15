const mongoose = require("mongoose");
const Models = require("./modeles.js")
/* Models.Users.insertOne(
    {name : "admin", mdp : "admin"}
);
 */
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
        /* if(req.query.genre){
            Models.Movies.find({genre:req.query.genre}, function (err, docs) {
                res.status(200).json(docs)
            });
        }
        else{ */
            Models.Movies.find({}, function (err, docs) {
                res.status(200).json(docs)
            });
        /*   
        } */
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
    },





/* ##################################################################"" */


    insertUser : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Users.insertMany(
            {name : req.body.name, mdp : req.body.mdp}
        );
    },
    deleteUser : function(req,res){
        res.setHeader('Content-type','application/json');
        Models.Users.deleteMany(
            {_id : req.body.id},
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
    }
}