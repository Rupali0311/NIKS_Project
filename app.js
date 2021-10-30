const path = require('path')

const express = require('express')
const mongoose = require('mongoose')
const hbs = require('hbs')

mongoose.connect('mongodb+srv://niks:niks@cluster0.g9uwq.mongodb.net/niks?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(() => {
    console.log('Database connected')
}).catch(() => {
    console.log('Database connection failed')
})

const userRouter = require('./routes/user.js')
const homeRouter = require('./routes/homePage.js')
const profileRouter = require('./routes/userProfile.js')

const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname,'/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')
const app = express()


app.set('view engine', 'hbs')
app.set('views',viewsPath)
app.use(express.json())
hbs.registerPartials(partialsPath)
app.use(express.urlencoded({ extended: false }))
app.use(express.static(publicDirectoryPath))
app.use(userRouter)
app.use(homeRouter)
app.use(profileRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server listening on port 3000')
})