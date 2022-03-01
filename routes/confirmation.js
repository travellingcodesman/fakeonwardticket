const express = require('express')
const router = express.Router()
const paypalClient = require('../server')

//Confirmation page
router.get('/', (req, res) => {
    res.render('confirmation/index')
})

router.post('/', async (req, res) => {
    const request = new paypal.orders.OrdersCreateRequest()
    request.prefer("return=representation")
    request.requestBody({
        intent: 'CAPTURE',
        purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: "4",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "4"
                        }
                    }
                },
                items: [
                    {
                        name: "Onward Ticket and Confirmation",
                        description: "",
                        unit_amount: {
                            currency_code: "USD",
                            value: "4"
                        },
                        quantity: "100000"
                    }
                ]     
            }]

         })
    try {
        const order = await paypalClient.execute(request)
        res.json( {id: order.result.id})
    } catch (e) {
        res.status(500).json( { error: e.message} )
    }
})



module.exports = router