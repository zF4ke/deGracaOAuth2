require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const discordStrategy = require('./strategies/discordstrategy')
const db = require('./database/database')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')

const PageRequest = require('./database/models/PageRequest')

// MongoDB

db.then(() => console.log('Connected to MongoDB (degracaauth)')).catch(err => console.error(err))

// Routes
const authRoute = require('./routes/auth')
const dashboardRoute = require('./routes/dashboard')

app.use(cors())

app.use(session({
    secret: 'some random secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    resave: false,
    name: 'discord.oauth2',
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}))


app.enable('trust proxy') 
app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// Passport

app.use(passport.initialize())
app.use(passport.session())

// Middleware Routes
app.use('/auth', authRoute)
app.use('/dashboard', dashboardRoute)

/* Private Use */
const adminRoute = require('./routes/admin')
app.use('/admin', adminRoute)
/* =========== */

app.listen(PORT, () => {
    console.log(`Listening to requests on port ${PORT}`)
    console.log(process.env.VERSION)
})

app.get('/', (req, res) => {
    res.render('home')

    const forwarded = req.headers['x-forwarded-for']
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress;
    storeIpAddress(ip)
})

async function storeIpAddress(ipAddress) {
    try {
        const request = await PageRequest.findOne({
            ipAddress: ipAddress
        })
        if(request) {
            return
        } else {
            const newRequest = await PageRequest.create({
                ipAddress: ipAddress
            })
            const savedRequest = await newRequest.save()
        }
    } catch (err) {
        console.log(err)
    }
}