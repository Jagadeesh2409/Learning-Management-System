const express = require('express')
const router = express.Router()
const multer = require('multer')
const { v4: uuid } = require('uuid')
const upload = multer({ dest: 'uploads/' })
const path = require('path')
const fs = require('fs')
const { error, response, success } = require('../utils/response')

router.post('/', upload.single('media'), async (req, res) => {
    const type = req.body.type
    try {
        const finalPath = path.join(__dirname, '../uploads', type)
        if (!fs.existsSync(finalPath)) fs.mkdirSync(finalPath, { recursive: true })

        const ext = path.extname(req.file.originalname)
        const filename = `${uuid()}${ext}`
        const finalFile = path.join(finalPath, filename)

        await fs.promises.rename(req.file.path, finalFile)

        const url = `${req.protocol}://${req.host}/uploads/${type}/${filename}`
        return success(res, { url }, response.UPLOADED)
    } catch (err) {
        console.log(err)
        error(res, response.ISE)
    }

})

module.exports = router