let jwt = require('jsonwebtoken')
const User = require('../model/userModel')
let AUth = async (req, res, next) => {
    try {
        let token = req.cookies.token
        if (!token) throw 'token is missing!'
        let decodedToken = jwt.verify(token, 'codingcloud')

        let user = await User.findById(decodedToken.id)

        if (!user) throw 'invalid user id '
        next()
    } catch (e) {
        res.status(401).send({ message: e })
    }
}


module.exports = AUth