
const router = require('express').Router()
const axios = require('axios')

function isAuthorized(req, res, next) {
    if(req.user) {
        /* isAdmin(req, res, next) */
        res.render('dashboard', {
            username: req.user.username
        })
    } else {
        res.redirect('/auth')
    }
}

/* function isAdmin(req, res, next) {
    let adminIDs = ["676156690395037713"]

    if(adminIDs.indexOf(req.user.discordId) > -1) {
        res.redirect('/admin')
    } else {
        res.render('dashboard', {
            username: req.user.username
        })
    }
} */

router.get('/', isAuthorized)

module.exports = router