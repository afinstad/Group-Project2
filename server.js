require("dotenv").config()
var PUB_KEY = process.env.PUB_KEY
var SECRET_KEY = process.env.SECRET_KEY
console.log (SECRET_KEY)
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
var stripe = require("stripe")(SECRET_KEY);

const charge = stripe.charges.create(
    {
        amount: 999,
        currency: 'usd',
        source: 'tok_visa',
        receipt_email: 'jenny.rosen@example.com',
    }
).then(res => {
    console.log (res)
})
