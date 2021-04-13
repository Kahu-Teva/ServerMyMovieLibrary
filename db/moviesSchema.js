/*
import mongoose from 'mongoose';

const {Schema}  = mongoose;
mongoose.Promise = global.Promise;
const moviesSchema = new Schema({
    title: {type: String, required: true},
    link: String,
    text: String,
    isDeleted: {type: Boolean, default: false},
    createdAt: {type:Date,default: Date.now},
    _creator: {type: Schema.ObjectId, ref: 'User'},
    _comments: [{type: Schema.ObjectId, ref: 'Comments' }]
});
*/