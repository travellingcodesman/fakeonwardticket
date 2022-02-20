const express = require('express')
const router = express.Router()

// Passenger Form
router.get('/', (req, res) => {
    // var departure = req.query.departure
    // var arrival = req.query.arrival
    // var date = req.query.date
    // var departtime = req.query.departtime
    // var arrivetime = req.query.arrivetime
    // var flightnumber = req.query.flightnumber
    res.render('passenger/index')
})

module.exports = router