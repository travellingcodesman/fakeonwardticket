const express = require('express')
const router = express.Router()

//Confirmation page
router.get('/', (req, res) => {
    res.render('confirmation/index')
})

module.exports = router