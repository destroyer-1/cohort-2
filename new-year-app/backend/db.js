
const  mongoose  = require ("mongoose");
const { boolean } = require("zod");

mongoose.connect('mongodb+srv://koratjay22:EQ6Djx0nlVH1MV9F@cluster0.b2y4oya.mongodb.net/todos');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)
module.exports={
    todo
}