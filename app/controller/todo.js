const { handleError } = require("../../helper/utils");
const { todoModel } = require("../db");
const { createtodoModel, updatetodoModel, retrievesingletodoModel, retrievealltodoModel, deletetodoModel } = require("../model/todo");


const  createtodoController = async (req, res, next) => {
    const { title, description  } = req.body;
    
    try {
         
      const data = {
        title, description 
      };
  
      let tododetails = await createtodoModel(data, res);
    
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "todo successfully created",
        data: tododetails,
        
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res)
    }
  };
  
const  updatetodoController = async (req, res, next) => {
    const { title, description , todoId , status } = req.body;
    
    try {
        const findtodo = await todoModel.findbyId(todoId)
        if (!findtodo) {
            return res.status(400).json({
                status_code: 400,
                status: true,
                message: "todo does not exist",
                data: tododetails,
                
              });
        }
      const data = {
        title, description ,todoId , status
      };
  
      let tododetails = await updatetodoModel(data, res);
    
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "todo successfully updated",
        data: tododetails,
        
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res)
    }
  };
  
 
const  singletodoController = async (req, res, next) => {
    const { todoId } = req.body;
    
    try {
        const findtodo = await todoModel.findbyId(todoId)
        if (!findtodo) {
            return res.status(400).json({
                status_code: 400,
                status: true,
                message: "todo does not exist",
                data: tododetails,
                
              });
        }
      const data = {
        todoId
      };
  
      let tododetails = await retrievesingletodoModel(data, res);
    
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "todo successfully retrieved",
        data: tododetails,
        
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res)
    }
};
  

const  deletetodoController = async (req, res, next) => {
    const { todoId } = req.body;
    
    try {
        const findtodo = await todoModel.findbyId(todoId)
        if (!findtodo) {
            return res.status(400).json({
                status_code: 400,
                status: true,
                message: "todo does not exist",
                data: tododetails,
                
              });
        }
      const data = {
        todoId
      };
  
      let tododetails = await deletetodoModel(data, res);
    
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "todo successfully deleted",
        data: tododetails,
        
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res)
    }
};

const  alltodoController = async (req, res, next) => {
    const { todoId } = req.body;
    
    try {
         
      const data = {
        named:'emmaro'
      };
  
      let tododetails = await retrievealltodoModel(data, res);
    
      return res.status(200).json({
        status_code: 200,
        status: true,
        message: "todos successfully retrieved",
        data: tododetails,
        
      });
    } catch (error) {
      console.log(error);
      handleError(error.message)(res)
    }
  };
  
module.exports = {
    createtodoController , updatetodoController , singletodoController , deletetodoController , alltodoController
  }