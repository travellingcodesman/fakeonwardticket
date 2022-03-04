const axios = require('axios').default

const apiSearch = async (req, res, next) => {
    res.departurecode = req.query.departure.toUpperCase()
    res.arrivalcode = req.query.arrival.toUpperCase()
    const datearray = req.query.departdate.split('-')
    res.departdate = `${datearray[2]}/${datearray[1]}/${datearray[0]}`
    try {
        const resp = await axios.get(`https://tequila-api.kiwi.com/v2/search?fly_from=${res.departurecode}&fly_to=${res.arrivalcode}&dateFrom=${res.departdate}&dateTo=${res.departdate}&max_stopovers=0&curr=USD&limit=5`, {
            headers: {
                'apikey': 'VQESGEm6Hhu2El2yrk3vGLPM_hP_DwBM'
            }
        })
        const apiResp = await resp.data
        res.departurecity = []
        res.arrivalcity = []
        res.departtime = []
        res.arrivetime = []
        res.flightnumber = []
        res.price = []
        res.resultsLength = apiResp.data.length
        for (let i = 0; i < res.resultsLength ; i++) {
            res.departurecity[i] = apiResp.data[i].route[0].cityFrom
            res.arrivalcity[i] = apiResp.data[i].route[0].cityTo
            res.departtime[i] = apiResp.data[i].route[0].local_departure
            res.arrivetime[i] = apiResp.data[i].route[0].local_arrival
            res.flightnumber[i] = apiResp.data[i].route[0].flight_no
            res.price[i] = apiResp.data[i].price
        }
        next()
        return
    } catch (err) {
        console.log(err)
    }
}

module.exports = apiSearch