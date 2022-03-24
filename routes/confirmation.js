const express = require('express')
const Trip = require('../models/trip')
const router = express.Router()
const mongoose = require('mongoose')

//Confirmation page
router.get('/', (req, res) => {
    Trip.find( {} , (trip) => {
        console.log(trip)
        res.render('confirmation/index', {
            newtrip: trip
        })
    })
})

module.exports = router