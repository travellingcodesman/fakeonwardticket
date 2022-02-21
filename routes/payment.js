const express = require('express')
const router = express.Router()
const trip = require('../models/trip')


//Payment page
router.get('/', (req, res) => {
    res.render('payment/index')
})

router.post('/', async (req, res) => {
    try {
        const trip = await trip.find({})
        res.render('payment/index', {trip: trip})
    } catch {
        res.render('index', {
            errorMessage: 'Unsuccessful!'
        })
    }
})


module.exports = router