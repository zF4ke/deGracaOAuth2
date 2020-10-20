require('dotenv').config()

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
const session = require('express-session')
const passport = require('passport')
const discordStrategy = require('./strategies/discordstrategy')
const db = require('./database/database')
const path = require('path')

// MongoDB

db.then(() => console.log('Connected to MongoDB (degracaauth)')).catch(err => console.error(err))

// Routes
const authRoute = require('./routes/auth')
const dashboardRoute = require('./routes/dashboard')

app.use(session({
    secret: 'some random secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false,
    name: 'discord.oauth2'
}))

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// Passport

app.use(passport.initialize())
app.use(passport.session())

// Middleware Routes
app.use('/auth', authRoute)
app.use('/dashboard', dashboardRoute)

app.listen(PORT, () => {
    console.log(`Listening to requests on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.render('home')
})