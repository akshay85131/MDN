const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

app.use(express.static('public'))
app.post('/submit-form', (req, res) => {
  // console.log(req)
  console.log(req.body)
  res.send('Form data Received')
})

app.listen(3005, () => console.log('Example app listening on port 3005!'))
