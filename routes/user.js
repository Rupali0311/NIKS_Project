const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.get('/signup', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/signup'))
})

router.post('/signup', async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 8)
        user = new User({
            name: req.body.email,
            password: hash,
            email: req.body.email,
            phone: req.body.phone,
            // courses: req.body.courses,
            password:'123'
        })
        await user.save()
        console.log(user)
        res.redirect('/login')
    }
    catch (e) {
        console.log(e)
        res.redirect('/')
    }
})

router.get('/login', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/login'))
})


router.post('/login', async (req, res) => {
    
})

module.exports = router
