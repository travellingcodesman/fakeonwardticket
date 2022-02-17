const express = require('express')
const axios = require('axios').default
const router = express.Router()

//Search results page
router.get('/', (req, res) =>  {
    var departure = req.query.departure
    var arrival = req.query.arrival
    var departdate = req.query.departdate
    const params = {
        access_key: '7467f7ffa88036524d3ea7acc107a861'
    }
    const sendGetRequest = async () => {
        try {
            const resp = await axios.get(`https://api.aviationstack.com/v1/flight&flight_date={departdate}&dep_iata={departure}&arr_iata={arrival}`, {params})
            const apiResp = response.data
            console.log(apiResp)
        } catch (err) {
            console.log(err)
        }

    }
    sendGetRequest()    
    res.render('searchresults/index', {query: req.query})
    
})

module.exports = router