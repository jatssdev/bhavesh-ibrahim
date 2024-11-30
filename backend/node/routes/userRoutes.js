let express = require('express')
const { userLogin, userRegister } = require('../controller/userController')
const { upload } = require('../config/multer')



let router = express.Router()

router.post('/login', userLogin)
router.post('/register', upload.single('profile'), userRegister)


module.exports = router;