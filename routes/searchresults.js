const express = require('express')
const router = express.Router()
const { query } = require('express')
const apiSearch = require('../public/javascript/middleware/apiSearch.js')


//Search results page
router.get('/', apiSearch, (req, res) =>  {
 
    res.render('searchresults/index', { departurecode: res.departurecode, arrivalcode: res.arrivalcode, departdate: res.departdate, departtime: res.departtime, arrivetime: res.arrivetime, flightnumber: res.flightnumber, departurecity: res.departurecity, arrivalcity: res.arrivalcity})
})

module.exports = router