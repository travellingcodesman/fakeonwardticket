const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('legal/index')
})

module.exports = router