const express = require('express')
const app = express()

const PORT = process.env.PORT 

app.get('/', function (req, res) {
    res.send('Hello World23')
  })
  
  app.listen(3000, () => console.log(`Server running on port ${PORT}`))