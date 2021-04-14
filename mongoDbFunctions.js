const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const connectionString = "mongodb://127.0.0.1:27017/mymovielibrary";

const movieSchema = new Schema({
    _id:Schema.Types.ObjectId,
    title:String,
    synopsis:String,
    releaseDate:String,
    genre:[String],
    duration:Number,
    posterLink:String,
    trailerLink:String,
    directors:[String],
    writers:[String],
    actors:[[String]],
    rate:String
},{collection :"movies"});

const peopleSchema = new Schema({
    _id:Schema.Types.ObjectId,
    lastname:String,
    firstname:String,
    biography:String,
    birthDate:String,
    deathDate:String,
    picture:String
},{collection: "peoples"});

const actorSchema = new Schema({
    _id:Schema.Types.ObjectId,
    lastname:String,
    firstname:String,
    picture:String
},{collection: "peoples"});


mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connecté à Mongoose")
});

module.exports = {
    getMovies : function(req,res){
        res.setHeader('Content-type','application/json');
        movies = Model("movies", movieSchema);
        movies.find({}, function (err, docs) {
            res.status(200).json(docs)
        });
    },
    getMovie : function(req,res){
        res.setHeader('Content-type','application/json');
        movies = Model("movies", movieSchema);
        movies.findById(req.query.id, function (err, docs) {
            (err)?(res.status(404).send({error:'error in movie id'}))
            :(res.status(200).json(docs))
        });
    },
    getPeoples : function(req,res){
        res.setHeader('Content-type','application/json');
        peoples = Model("peoples", peopleSchema);
        peoples.find({}, function (err, docs) {
            res.status(200).json(docs);
        });
    },
    getPeople : function(req,res){
        res.setHeader('Content-type','application/json');
        
        peoples = Model("peoples", peopleSchema);
        mopeoplesviesModele.findById(req.query.id, function (err, docs) {
            (err)?(res.status(404).send({error:'error in id'}))
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