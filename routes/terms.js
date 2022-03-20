const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('terms/index')
})

module.exports = router