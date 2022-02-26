const express = require('express')
const router = express.Router()
const { query } = require('express')
const trip = require('../models/trip')

// Passenger Form
router.get('/', (req, res) => {
    res.render('passenger/index', { query: req.query, trip: new trip() })
})

module.exports = router