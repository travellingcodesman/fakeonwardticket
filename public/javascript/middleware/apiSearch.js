const axios = require('axios').default

const apiSearch = async (req, res, next) => {
    res.departurecode = req.query.departure.toUpperCase()
    res.arrivalcode = req.query.arrival.toUpperCase()
    res.departdate = req.query.departdate
    const datearray = res.departdate.split('-')
    dateformatted = `${datearray[2]}/${datearray[1]}/${datearray[0]}`
    try {
        const resp = await axios.get(`https://tequila-api.kiwi.com/v2/search?fly_from=${res.departurecode}&fly_to=${res.arrivalcode}&dateFrom=${dateformatted}&dateTo=${res.departdate}&max_stopovers=0&curr=USD&limit=5`, {
            headers: {
                'apikey': process.env.API_KEY
            }
        })
        const apiResp = await resp.data
        res.departurecity = []
        res.arrivalcity = []
        res.arrivedate = []
        local_departure = []
        local_arrival = []
        res.departtime = []
        res.arrivetime = []
        res.airline = []
        res.flightnumber = []
        res.price = []
        res.resultsLength = apiResp.data.length
        for (let i = 0; i < res.resultsLength ; i++) {
            res.departurecity[i] = apiResp.data[i].route[0].cityFrom
            res.arrivalcity[i] = apiResp.data[i].route[0].cityTo
            local_departure[i] = apiResp.data[i].route[0].local_departure
            local_arrival[i] = apiResp.data[i].route[0].local_arrival
            res.arrivedate[i] = local_arrival[i].slice(0, 10)
            res.departtime[i] = local_departure[i].slice(11, 16)
            res.arrivetime[i] = local_arrival[i].slice(11, 16)
            res.airline[i] = apiResp.data[i].route[0].airline
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