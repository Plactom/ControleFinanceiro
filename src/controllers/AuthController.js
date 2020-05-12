const { dbUserRegistration } = require('../repositories/AuthRepository')
const Responses = require('../utils/responses')
const bcrypt = require('bcrypt')
const saltRounds = 10

const responsesUtil = new Responses()

module.exports = {
    async userRegistration(req, res) {
        try {
            const userRecived = req.body
            if(!userRecived.email || !userRecived.password || !userRecived.name) {
                responsesUtil.setError(400, 'Complete todos os campos para cadastrar')
                responsesUtil.send(res)
            } else {
                userRecived.password = await bcrypt.hash(userRecived.password, saltRounds)
                const user = await dbUserRegistration(userRecived)
                responsesUtil.setSuccess(201, 'Cadastrado com sucesso', user)
                user.password = undefined
                responsesUtil.send(res)
            }
        } catch (error) {
            throw error
        }
    },

    async userLogin(req, res) {
        try {
            const userRecived = req.body
            
        } catch (error) {
            
        }
    }
}