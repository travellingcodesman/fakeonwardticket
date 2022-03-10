const express = require('express')
const router = express.Router()
const apiSearch = require('../public/javascript/middleware/apiSearch.js')


//Search results page
router.get('/', apiSearch, (req, res) =>  {
    res.render('searchresults/index', { departurecode: res.departurecode, arrivalcode: res.arrivalcode, departdate: res.departdate, arrivedate: res.arrivedate, departtime: res.departtime, arrivetime: res.arrivetime, airline: res.airline, flightnumber: res.flightnumber, departurecity: res.departurecity, arrivalcity: res.arrivalcity, resultsLength: res.resultsLength, price: res.price})
})

module.exports = router