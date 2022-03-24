const express = require('express')
const Trip = require('../models/trip')
const router = express.Router()
const mongoose = require('mongoose')

//Confirmation page
router.get('/', async (req, res) => {
    try {
        const trips = await Trip.find({})
        res.render('confirmation/index', { trips: trips})
    } catch {
        res.redirect('/')
    }

})

module.exports = router