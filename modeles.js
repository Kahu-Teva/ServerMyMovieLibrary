const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const connectionString = "mongodb://127.0.0.1:27017/mymovielibrary";

mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
db = mongoose.connection;
db.on('error', console.error.bind(console, 'ERROR_CONNECTION'));
db.once('open', function() {
    console.log("connecté à Mongoose")
});

const actor = new Schema({
    id:String,
    role:String
})
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
    actors:[actor],
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

const userSchema = new Schema({
    _id:Schema.Types.ObjectId,
    name:String,
    mdp:String
},{collection: "users"});


module.exports = {
    Movies : Model("movies", movieSchema),
    Peoples : Model("peoples", peopleSchema),
    Users : Model("users", userSchema)
}

