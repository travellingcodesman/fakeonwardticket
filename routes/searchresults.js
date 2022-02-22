const express = require('express')
const axios = require('axios').default
const router = express.Router()
const { query } = require('express')


//Search results page
router.get('/', (req, res) =>  {
    var departure = req.query.departure.toLocaleUpperCase()
    var arrival = req.query.arrival.toUpperCase()
    var datearray = req.query.departdate.split('-')
    var departdate = `${datearray[2]}/${datearray[1]}/${datearray[0]}`
    var departtime = 'n/a'
    var arrivetime = 'n/a'
    var flightnumber = 'n/a'
    const sendGetRequest = async () => {
        try {
            const resp = await axios.get(`https://tequila-api.kiwi.com/v2/search?fly_from=${departure}&fly_to=${arrival}&dateFrom=${departdate}&limit=5`, {
                headers: {
                    'apikey': 'VQESGEm6Hhu2El2yrk3vGLPM_hP_DwBM'
                }
            })
            const apiResp = await resp.data
            console.log(apiResp)
        } catch (err) {
            console.log(err)
        }
        
    }
    res.render('searchresults/index', {departure: departure, arrival: arrival, departdate: departdate, departtime : departtime, arrivetime: arrivetime, flightnumber: flightnumber})
    sendGetRequest()
})

module.exports = router