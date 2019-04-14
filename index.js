const express = require('express')

const app = express()

app.get('/', (request, response) => {
  response.send({ status: 'worked' })
})

app.listen(3000, () => {
  console.log('Server is running')
})