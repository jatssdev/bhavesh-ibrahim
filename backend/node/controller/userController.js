const User = require("../model/userModel")
let bcrypt = require('bcryptjs')




let userLogin = async (req, res) => {
    let { email, password } = req.body
    try {
        // let user = await User.findOne({ email: email }).select('-name') --> select method to remove perticular key from values
        let user = await User.findOne({ email: email })
        if (!user) throw 'invalid Email Id!'
        let isValidPassword = await bcrypt.compare(password, user.password)

        if (!isValidPassword) throw 'Invalid password!'

        let jsUser = user.toObject()

        delete jsUser.password

        res.send({
            success: true, message: 'Login Success!', user: jsUser
        })
    } catch (e) {
        res.send({
            success: false, message: 'Error : ' + e
        })

    }
}

let userRegister = async (req, res) => {

    let profile = req.file
    console.log(profile);

    let { name, email, password } = req.body
    try {

        let existingUser = await User.findOne({ email: email })
        if (existingUser) throw 'user already exists!'
        let hashedPassword = await bcrypt.hash(password, 10)

        let newUser = new User({
            email: email,
            name: name,
            password: hashedPassword,
            profile: profile.path
        })
        let result = await newUser.save()

        if (!result) throw 'Database Error !'
        res.send({
            success: true, message: 'user registered successfully!', user: result
        })
    } catch (e) {
        res.send({
            success: false, message: 'Error : ' + e
        })
    }



}



module.exports = { userRegister, userLogin }