const express = require('express')
const router = express.Router()

// Passenger Form
router.get('/', (req, res) => {
    res.render('passanger/index')
})

module.exports = router