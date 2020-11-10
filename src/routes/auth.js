const router = require('express').Router()
const passport = require('passport')

router.get('/', passport.authenticate('discord'))
router.get('/redirect', passport.authenticate('discord', {
    failureRedirect: '/',
    successRedirect: '/dashboard'
}), (req, res) => {
    res.send(req.user)
})

router.get('/logout', (req, res) => {
    if(req.user) {
        req.logout()
        res.redirect('/')
    } else {
        res.redirect('/')
    }
})

module.exports = router