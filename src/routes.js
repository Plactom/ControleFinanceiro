const Router = require('express')

const RecipesController = require('./controllers/RecipesController')
const UserController = require('./controllers/UsersController')

const routes = Router()

routes.post('/addrecipe', RecipesController.store)
routes.get('/recipes', RecipesController.index)

routes.get('/balance', UserController.getBalance)

module.exports = routes