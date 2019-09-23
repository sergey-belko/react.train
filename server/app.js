const express = require('express')
const app = express()

const port = 3001

app.get('/', function (req, res) {
  res.send('Hello World form get route!')
})

app.post('/', function (req, res) {
  console.log(req)
  res.status(200).send('Hello World from post route!', JSON.stringify(req.body))
})

app.listen(port, function () {
  console.log('Example app listening on port: ' + port + '!')
})
