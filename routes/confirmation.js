const express = require('express')
const router = express.Router()

//Confirmation page
router.get('/', (req, res) => {
    res.render('confirmation/index')
})

router.post('/', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "confirmation/index",
            "cancel_url": "/"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Fake Onward Ticket",
                    "sku": "001",
                    "price": "4.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "4.00"
            },
            "description": "Fake onward ticket just for fun"
        }]
    };
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.link.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href)
                }
            }
        }
    });
    
})

router.get('/', (req, res) => {
    const payerID = req.query.payerID
    const paymentID = req.query.paymentID

    const execute_payment_json = {
        "payer_id": payerID,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "4.00"
            }
        }]
    };
    paypal.payment.execute(paymentID, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log("Get Payment Response");
            console.log(JSON.stringify(payment));
        }
    });
})


module.exports = router