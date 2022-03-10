if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express")
const app = express()
const expressLayouts = require('express-ejs-layouts')
const axios = require('axios')
const fetch = require('node-fetch')
const apiSearch = require('./public/javascript/middleware/apiSearch.js')


const indexRouter = require('./routes/index')
const legalRouter = require('./routes/legal')
const privacyRouter = require('./routes/privacy')
const searchRouter = require('./routes/searchresults')
const passengerRouter = require('./routes/passenger')
const paymentRouter = require('./routes/payment')
const confirmationRouter = require('./routes/confirmation')
const paypalRouter = require('./routes/paypalapi')



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/', indexRouter)
app.use('/legal', legalRouter)
app.use('/privacy', privacyRouter)
app.use('/searchresults', searchRouter)
app.use('/passenger', passengerRouter)
app.use('/payment', paymentRouter)
app.use('/confirmation', confirmationRouter)
app.use('/api', paypalRouter)


app.listen(process.env.PORT || 3000)


