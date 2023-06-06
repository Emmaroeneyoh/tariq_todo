const mongoose = require('mongoose')
const schema = mongoose.Schema

const trainee_schema = new schema({
    title:{
        type:String,
    },
    description: {
        type:String,
    },
    completed:{
        type:Boolean , default : false
    },
    createdAt : {
        type: Date,
        default:Date.now
    }
})
const todoModel = mongoose.model('tariq_todo', trainee_schema )
module.exports = {
    todoModel
}