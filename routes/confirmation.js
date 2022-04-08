const express = require('express')
const router = express.Router()
const Trip = require('../models/trip')

//Confirmation page

router.get('/:bookingnumber', async (req, res) => {
    let bookingnumber = req.params.bookingnumber
    let trip = await Trip.find( {bookingnumber: bookingnumber} )
    trip = trip[0]
    try {
        res.render('confirmation/index', { trip: trip} )
    } catch {
        res.render('/index', {
            errorMessage: 'Unsuccessful'
        })
    }
})

module.exports = router