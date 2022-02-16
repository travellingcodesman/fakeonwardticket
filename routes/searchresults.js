const express = require('express')
const router = express.Router()

//Search results page
router.get('/', (req, res) =>  {
    res.render('searchresults/index')
    var departure = req.query.departure
    var arrival = req.query.arrival
    var departdate = req.query.departdate
})

module.exports = router