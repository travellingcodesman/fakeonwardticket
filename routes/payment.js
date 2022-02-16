const express = require('express')
const router = express.Router()

//Payment page
router.get('/', (req, res) => {
    res.render('payment/index')
})

module.exports = router