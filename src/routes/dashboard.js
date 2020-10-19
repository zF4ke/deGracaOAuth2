
const router = require('express').Router()
const express = require('express')
const path = require('path')

function isAuthorized(req, res, next) {
    if(req.user) {
        next()
    } else {
        res.redirect('/')
    }
}


router.get('/', isAuthorized, (req, res) => {
    res.render('dashboard')
})

module.exports = router