
const User = require('../models/User')

module.exports = {
    async getBalance(req, res) {
        const UserInfos = await User.find()
        if(UserInfos.length > 0) {
            try {
                return res.json(UserInfos[0].balance)
            } catch (error) {
                return res.json({ message: error.message })
            }
        } else {
            return res.json({ balance: 0 })
        }

        
        
    }
}