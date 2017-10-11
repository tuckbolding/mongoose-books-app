
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
     title: String,
     author: String,
     image: String,
     release_date: String,
 });
//Create Book model from schema
 var Book = mongoose.model('Book', BookSchema);




 module.exports = Book;
