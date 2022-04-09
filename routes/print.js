const express = require('express')
const router = express.Router()
const Trip = require('../models/trip')

router.put('/:paid/:bookingnumber/:paypalid', async (req, res) => {
    let trip
    try {
        trip = await Trip.find( {bookingnumber: req.params.bookingnumber} )
        trip.paypalid = req.params.paypalid
        trip.paid = req.params.paid
        await trip.save()
        res.render('print/index', { trip: trip} )
    } catch {
        res.render('/index', {
            errorMessage: 'Unsuccessful'
        })
    }
})

module.exports = router