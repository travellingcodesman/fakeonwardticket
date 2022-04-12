const express = require('express')
const router = express.Router()
const Trip = require('../models/trip')

//Confirmation page

router.get('/:status/:id/:paypalid', async (req, res) => {
    let trip = await Trip.findById(req.params.id)
    console.log(trip)
    try {
        res.render('confirmation/index', { trip: trip, status: req.params.status} )
    } catch {
        res.render('/index', {
            errorMessage: 'Unsuccessful'
        })
    }
})

router.put('/:status/:id/:paypalid', async (req, res) => {
    let trip
    try {
        trip = await Trip.findById(req.params.id)
        trip.paypalid = req.params.paypalid
        if (req.params.status == 'COMPLETED') {
            trip.paid = true
        }
        await trip.save()
        console.log(trip)
        res.render('confirmation/index', { trip: trip, status: req.params.status} )
    } catch {
        res.render('/index', {
            errorMessage: 'Unsuccessful'
        })
    }
})

module.exports = router