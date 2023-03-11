const mongoose = require("mongoose")
const TodoSchema = new mongoose.Schema({
    title:{
        type: "String",
        required: true,
    },
    description:{
        type: "String",
    },
})
const todo = mongoose.model("todo", TodoSchema)
module.exports = todo;