const joi = require('joi')

const createtodoValidation = (req, res, next) => {
    const schema = joi.object({
      title: joi.string().required(),
      description :  joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: err,
        
        error: err,
      });
    }
    return next();
};
  

const updatetodoValidation = (req, res, next) => {
    const schema = joi.object({
      todoId: joi.string().required(),
      description :  joi.optional(),
      title :  joi.optional(),
      status :  joi.optional(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: err,
        
        error: err,
      });
    }
    return next();
};
  
const retrievetodoValidation = (req, res, next) => {
    const schema = joi.object({
      todoId: joi.string().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
      let err = error.details[0].message;
      // let errlen = err.split(' ')
      // console.log('this is length ' , errlen.length)
      return res.status(400).json({
        status_code: 400,
        status: false,
        message: err,
        
        error: err,
      });
    }
    return next();
};
  
module.exports = {
    createtodoValidation ,  updatetodoValidation ,   retrievetodoValidation
}