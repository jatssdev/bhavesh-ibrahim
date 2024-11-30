// let multer = require('multer')

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
//     }
// })

// const upload = multer({ storage: storage })

// module.exports = upload



let multer = require('multer')
const { CloudinaryStorage } = require("multer-storage-cloudinary"); // install this package
const cloudinary = require("cloudinary").v2; // install this package

cloudinary.config({
    cloud_name: "dzkd5zwnz",
    api_key: "464989732649778",
    api_secret: "9nybxEtNJLbvy8aEF966btZqrY4"
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "ibrahimandbhavesh",
    },
})

let upload = multer({ storage: storage })
// let upload = multer({dest:"/upload"})

module.exports = { upload, cloudinary }