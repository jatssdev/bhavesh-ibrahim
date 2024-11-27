let mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    profile: String
})

let User = mongoose.model('users', userSchema)

module.exports = User 