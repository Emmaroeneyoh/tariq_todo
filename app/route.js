const { createtodoController, updatetodoController, singletodoController, alltodoController, deletetodoController } = require('./controller/todo')
const { createtodoValidation, updatetodoValidation, retrievetodoValidation } = require('./validation')

const router = require('express').Router()

router.post('/create/todo', createtodoValidation , createtodoController)
router.put('/update/todo', updatetodoValidation , updatetodoController)
router.get('/retrieve/todo', retrievetodoValidation , singletodoController)
router.get('/retrieve/todos',alltodoController)
router.delete('/delete/todo', retrievetodoValidation , deletetodoController)

module.exports = router