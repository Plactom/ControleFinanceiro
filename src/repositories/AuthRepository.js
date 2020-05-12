const User = require('../models/User')

module.exports = {
    async dbUserRegistration(user) {
        let userRecived = user
        return await User.create(userRecived)
    }
}