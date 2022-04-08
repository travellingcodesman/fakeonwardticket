const express = require('express')
const router = express.Router()
const Trip = require('../models/trip')
const randbookrefer = require('../public/javascript/randbookrefer')


// Payment page
router.get('/', (req, res) => {
    res.render('payment/index')
})

router.post('/', async (req, res) => {
    bookingnumber = Math.floor(Math.random() * 100000000000)
    const trip = new Trip({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            gender: req.body.gender,
            departdate: req.body.departdate,
            arrivedate: req.body.arrivedate,
            bookingdate: new Date().toString().slice(0,21),
            email: req.body.email,
            departurecode: req.body.departurecode,
            arrivalcode: req.body.arrivalcode,
            departurecity: req.body.departurecity,
            arrivalcity: req.body.arrivalcity,
            departtime: req.body.departtime,
            arrivetime: req.body.arrivetime,
            airline: req.body.airline,
            flightnumber: req.body.flightnumber,
            price: req.body.price,
            bookingnumber: bookingnumber,
            airlinereference: randbookrefer(),
            paid: false
        })

        try {
            const newtrip = await trip.save()
            res.render('payment/index', { newtrip: newtrip })
                
        } catch {
            res.render('/index', {
                    errorMessage: 'Unsuccessful'
                })
            }
})

module.exports = router