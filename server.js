if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require("express")
const app = express()
const expressLayouts = require('express-ejs-layouts')
const { generateAccessToken, createOrder, capturePayment } = require('../Onward_dev/public/javascript/paypal')


const indexRouter = require('./routes/index')
const termsRouter = require('./routes/terms')
const privacyRouter = require('./routes/privacy')
const searchRouter = require('./routes/searchresults')
const passengerRouter = require('./routes/passenger')
const paymentRouter = require('./routes/payment')
const confirmationRouter = require('./routes/confirmation')



app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose');
const Trip = require('./models/trip');
const { response } = require('express');
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/', indexRouter)
app.use('/terms', termsRouter)
app.use('/privacy', privacyRouter)
app.use('/searchresults', searchRouter)
app.use('/passenger', passengerRouter)
app.use('/payment', paymentRouter)
app.use('/confirmation', confirmationRouter)


app.post('/api/orders', async (req, res) => {
    const order = await createOrder()
    res.json(order)
})

app.post('/api/orders/:orderID/capture', async (req, res) => {
    const { orderID } = req.params
    const captureData = await capturePayment(orderID)
    res.json(captureData)
})


app.listen(process.env.PORT || 3000)


