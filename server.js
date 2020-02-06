const express = require('express')
const next = require('next')
const stripeLoader = require('stripe')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(express.json())

  const stripe = stripeLoader(process.env.STRIPE_SECRET)
  const charge = (token, amount) => {
    return stripe.charges.create({
      amount: Math.round(amount*100),
      currency: 'usd',
      source: token,
      description: 'Photographer E commerce'
    })
  }

  server.post('/checkout', async (req, res) => {
    console.log('GOT POST FROM CHECKOUT: ', req.body)
    try {
      let data = await charge(req.body.token.id, req.body.amount)
      res.send("Purchased!")
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  })

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })
  server.get('/checkout', (req, res) => {
    console.log('get checkout')
    return app.render(req, res, '/checkout', req.query)
  })
  server.get('/:slug', (req, res) => {
    return app.render(req, res, '/', {slug: req.params.slug})
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
