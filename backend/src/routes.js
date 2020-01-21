const Router = require('express')

const routes = Router()

routes.get('/balance', (req, res) => {
    return res.send('Olá')
})

module.exports = routes