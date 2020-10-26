
const router = require('express').Router()

function isAuthorized(req, res, next) {
    if(req.user) {
        isAdmin(req, res, next)
    } else {
        res.redirect('/auth')
    }
}

function isAdmin(req, res, next) {
    let adminIDs = ["676156690395037713"]

    if(adminIDs.indexOf(req.user.discordId) > -1) {
        /* res.send({
            username: req.user.discordId,
            discordId: req.user.discordId
        }) */
        res.redirect('/admin')
    } else {
        res.render('dashboard', {
            username: req.user.username
        })
    }
}


router.get('/', isAuthorized)

module.exports = router