const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const Enroll = require('../models/Enroll')
const Enquiry = require('../models/Enquiry')

const router = express.Router()

router.get('/signup', (req, res) => {
    res.render(path.join(__dirname,'../templates/views/signup'))
})

router.post('/signup', async (req, res) => {
    try {
        const hash = await bcrypt.hash(req.body.password, 8)
        user = new User({
            name: req.body.name,
            password: hash,
            email: req.body.email,
            phone: req.body.phone,
            // courses: req.body.courses,
            // password:'123'
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
    try {
        User.findOne({ "email": req.body.email }, async (err, usr) => {
            if (!usr) {
                console.log('No user found')
                res.redirect('/login')
            }
            bcrypt.compare(req.body.password, usr.password, async function (err, isMatch) {
                if (isMatch) {   
                    console.log('Successfully Logged In')
                    res.redirect('/')
                }
                if (!isMatch) { 
                    console.log('Wrong password')
                    res.redirect('/login')
                }
            })
        })
    } catch (e) {
        console.log('Error')
        res.redirect('/')
    }
})
router.post('/enroll', async (req, res) => {
    try {
        enroll = new Enroll({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            course:req.body.course
        })
        await enroll.save()
        console.log(enroll)
        res.redirect('/')
    }
    catch (e) {
        console.log(e)
        res.redirect('/enroll')
    }
})

router.post('/enquiry', async (req, res) => {
    try {
        enquiry = new Enquiry({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mobile,
            subject: req.body.subject,
            enquiry:req.body.enquiry
        })
        await enquiry.save()
        console.log(enquiry)
        res.redirect('/')
    }
    catch (e) {
        console.log(e)
        res.redirect('/enquiry')
    }
})

module.exports = router
