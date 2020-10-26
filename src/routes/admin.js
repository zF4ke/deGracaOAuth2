const router = require('express').Router()
const passport = require('passport')
const DiscordUser = require('../database/models/DiscordUser')

function isAdmin(req, res, next) {
    let adminIDs = ["676156690395037713"]

    if(req.user) {
        if(adminIDs.indexOf(req.user.discordId) > -1) {
            next()
        } else {
            res.redirect('/')
        }
    } else {
        res.redirect('/')
    }
}

router.get('/', /* isAdmin, */ (req, res, next) => {
    res.render('admin')
})

router.get('/user', /* isAdmin, */ (req, res, next) => {
    try {
        DiscordUser.find({}, function (err, users) {
            if(err) {
                res.send('Something went really wrong.')
                next()
            }
            res.json(users)
        })
    } catch (err) {
        console.error(err)
    }

})

router.get('/user/:id', /* isAdmin, */ (req, res, next) => {
    try {
        DiscordUser.findOne({
            discordId: req.params.id
        }).then(userFound => {
            if(!userFound) return res.sendStatus(404).end()

            res.json(userFound)
        })
    } catch (err) {
        console.error(err)
    }
})

module.exports = router