const express = require('express')
const axios = require('axios').default
const router = express.Router()
const { query } = require('express')


//Search results page
router.get('/', (req, res) =>  {
    var departure = req.query.departure
    var arrival = req.query.arrival
    var date = req.query.date
    var departtime = 'n/a'
    var arrivetime = 'n/a'
    var flightnumber = 'n/a'
    const sendGetRequest = async (url, params) => {
        try {
            const resp = await axios.get(url, {header: params})
            const apiResp = await resp.data
            console.log(apiResp)
        } catch (err) {
            console.log(err)
        }
        
    }
    const url = 'https://tequila-api.kiwi.com/v2/search?fly_from=FRA&fly_to=SFO&date_from=01%2F04%2F2022&date_to=05%2F04%2F2022&return_from=03%2F04%2F2022&return_to=04%2F04%2F2022&max_fly_duration=100&flight_type=oneway&one_for_city=0&one_per_date=0&adults=2&children=2&selected_cabins=C&mix_with_cabins=M&adult_hold_bag=1%2C0&adult_hand_bag=1%2C1&child_hold_bag=2%2C1&child_hand_bag=1%2C1&only_working_days=false&only_weekends=false&partner_market=us&max_stopovers=2&max_sector_stopovers=2&vehicle_type=aircraft&limit=5'
    const params = {
        access_key: 'VQESGEm6Hhu2El2yrk3vGLPM_hP_DwBM'
    }
    res.render('searchresults/index', {query: req.query, departtime : departtime, arrivetime: arrivetime, flightnumber: flightnumber})
    sendGetRequest()
})

module.exports = router