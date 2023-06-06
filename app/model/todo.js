const { todoModel } = require("../db");


const createtodoModel = async (data,res) => {
    try {
        const {title, description  }  = data
    const form = await new todoModel({
        title , description
      });
    const todoDetails = await form.save();
    return todoDetails
    } catch (error) {
        console.log(error)
        return error.message
        // handleError(error.message)(res)
    }
    
}

const updatetodoModel = async (data,res) => {
    try {
        const {todoId , title , description , status}  = data
        const todoupdate = await todoModel.findByIdAndUpdate(todoId, {
            $set: {
            title , description , completed:status
        }
    })
    return todoupdate
    } catch (error) {
        console.log(error)
        return error.message
        // handleError(error.message)(res)
    }
    
}

const retrievealltodoModel = async (data,res) => {
    try {
    
    const todoDetails = await todoModel.find();
    return todoDetails
    } catch (error) {
        console.log(error)
        return error.message
        // handleError(error.message)(res)
    }
    
}


const retrievesingletodoModel = async (data,res) => {
    try {
        const {todoId  }  = data
   
    const todoDetails = await todoModel.findById(todoId);
    return todoDetails
    } catch (error) {
        console.log(error)
        return error.message
        // handleError(error.message)(res)
    }
    
}


const deletetodoModel = async (data,res) => {
    try {
        const {todoId }  = data
   
    const todoDetails = await todoModel.findByIdAndDelete(todoId);
    return todoDetails
    } catch (error) {
        console.log(error)
        return error.message
        // handleError(error.message)(res)
    }
    
}

module.exports = {
    createtodoModel , retrievealltodoModel , retrievesingletodoModel ,  deletetodoModel , updatetodoModel
}
