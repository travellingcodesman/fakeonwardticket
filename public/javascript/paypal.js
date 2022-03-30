const axios = require('axios')
const fetch = require('node-fetch')

const base = "https://api-m.sandbox.paypal.com"

const generateAccessToken = async () => {
    const response = await axios({
        url: base + "/v1/oauth2/token",
        method: "post",
        data: "grant_type=client_credentials",
        auth: {
            username: process.env.PAYPAL_CLIENT_ID,
            password: process.env.PAYPAL_CLIENT_SECRET
        }
    })
    return response.data.access_token
  }
  
const createOrder = async () => {
    const accessToken = await generateAccessToken()
    const url = `${base}/v2/checkout/orders`
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "3.99",
                    }
                }
            ]
        })
    })
    const data = await response.json()
    console.log(data)
    return data
  }
  
const capturePayment = async (orderId) => {
    const accessToken = await generateAccessToken()
    const url = `${base}/v2/checkout/orders/${orderId}/capture`
    const response = await fetch(url, {
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`
        }
    })
    const data = await response.json()
    console.log(data)
    return data
  }


module.exports = {
    generateAccessToken,
    createOrder,
    capturePayment,
}