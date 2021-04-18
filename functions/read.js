const Models = require("./../modeles.js");

module.exports = {
    getRandomMovie : (req,res) => {
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
    getMovies : (req,res) => {
        res.setHeader('Content-type','application/json');
        Models.Movies.find({}, function (err, docs) {
            res.status(200).json(docs)
        });
    },
    getMovie : (req,res) => {
        res.setHeader('Content-type','application/json');
        Models.Movies.findById(req.query.id, function (err, docs) {
            (err)?(res.status(200).send({error:'ERROR_MOVIE_NOT_FOUND'}))
            :(res.status(200).json(docs))
        });
    },
    getPeoples : (req,res) => {
        res.setHeader('Content-type','application/json');
        Models.Peoples.find({}, function (err, docs) {
            res.status(200).json(docs);
        });
    },
    getPeople : (req,res) => {
        res.setHeader('Content-type','application/json');
        console.log("requests");
        Models.Peoples.findById(req.query.id, function (err, docs) {
            (err)?(res.status(200).send({error:'ERROR_PEOPLE_NOT_FOUND'}))
            :(res.status(200).json(docs))
        });
    }
}
    
   