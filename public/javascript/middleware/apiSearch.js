const axios = require('axios').default

module.exports = async function apiSearch (req, res, next) {
    const departurecode = req.query.departure.toLocaleUpperCase()
    const arrivalcode = req.query.arrival.toUpperCase()
    const datearray = req.query.departdate.split('-')
    const departdate = `${datearray[2]}/${datearray[1]}/${datearray[0]}`
    try {
        const resp = await axios.get(`https://tequila-api.kiwi.com/v2/search?fly_from=${departurecode}&fly_to=${arrivalcode}&dateFrom=${departdate}&dateTo=${departdate}&limit=5`, {
            headers: {
                'apikey': 'VQESGEm6Hhu2El2yrk3vGLPM_hP_DwBM'
            }
        })
        const apiResp = await resp.data
        // console.log(apiResp)
        // console.log(apiResp.data[0].route[0])
        // console.log(datearray)
        // console.log(departdate)
        res.departurecode = departurecode
        res.arrivalcode = arrivalcode
        res.departdate = departdate
        res.departurecity = apiResp.data[0].route[0].cityFrom
        res.arrivalcity = apiResp.data[0].route[0].cityTo
        res.departtime = apiResp.data[0].route[0].local_departure
        res.arrivetime = apiResp.data[0].route[0].local_arrival
        res.flightnumber = apiResp.data[0].route[0].flight_no
        next()
    } catch (err) {
        console.log(err)
    }
}

