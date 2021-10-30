const path = require('path')
const express = require('express')
const router = express.Router()

router.get('/profile', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/profile'))
})

module.exports = router