const User = require('../models/User')
const Responses = require('../utils/responses')
const bcrypt = require('bcrypt')
const saltRounds = 10

const responses = new Responses()

module.exports = {
    async userRegistration(req, res) {
        try {
            const userRecived = req.body
            userRecived.password = await bcrypt.hash(userRecived.password, saltRounds)
            if(!userRecived.email || !userRecived.password || !userRecived.name) {
                responses.setError(400, 'Complete todos os campos para cadastrar')
                responses.send(res)
            } else {
                const user = await User.create(userRecived)
                responses.setSuccess(200, 'Cadastrado com sucesso', user)
                user.password = undefined
                responses.send(res)
            }
        } catch (error) {
            console.log(error)
        }

    }
}